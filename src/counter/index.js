// import React, { useState, useMemo } from "react"
// import { calculateTotals } from "./utils"

export default function SelectTickets({
  context: { workshopData, subscriberCode },
  send
}) {
  let initialTicketsToPurchase = React.useMemo(
    () =>
      workshopData.ticketTypes.reduce((ticketsToPurchase, type, index) => {
        ticketsToPurchase[type.name] = index === 0 ? 1 : 0
        return ticketsToPurchase
      }, {}),
    [workshopData]
  )

  let [ticketsToPurchase, setTicketsToPurchase] = React.useState(
    initialTicketsToPurchase
  )

//   let totals = calculateTotals(workshopData, ticketsToPurchase)
    let totals = 0;
  let handleQuantity = (type, quantity) => {
    let currentSeatsForType = ticketsToPurchase[type.name]
    let maxSeats =
      workshopData.seatsAvailable - totals.quantity + currentSeatsForType
    let hasTypeAvailability = type.available != null

    // set nextQuantity to what the user wants, or the max possible for
    // that ticket type
    let nextQuantity = quantity <= maxSeats ? quantity : maxSeats
    if (hasTypeAvailability) {
      nextQuantity = Math.min(type.available, nextQuantity)
    }

    let next = {
      ...ticketsToPurchase,
      [type.name]: nextQuantity
    }

    setTicketsToPurchase(next)
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        send({
          type: "SUBMIT",
          payload: ticketsToPurchase
        })
      }}
    >
      <table>
        <thead>
          <tr>
            <th>Ticket Type</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {workshopData.ticketTypes.map((type, index) => {
            let quantity = ticketsToPurchase[type.name]
            let hasTypeAvailability = type.available != null
            let totalSeatsAvailable =
              workshopData.seatsAvailable - totals.quantity
            let typeSeatsAvailable = hasTypeAvailability
              ? type.available - quantity
              : totalSeatsAvailable
            let disabled = typeSeatsAvailable === 0 || totalSeatsAvailable === 0
            let typeSoldOut = hasTypeAvailability && type.available === 0
            let almostSoldOut =
              !typeSoldOut && hasTypeAvailability && type.available <= 5
            let label = type.id || type.name

            return (
              <tr key={type.name}>
                <td
                  style={{
                    textDecoration: typeSoldOut ? "line-through" : ""
                  }}
                >
                  {label}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    width: "100px",
                    textDecoration: typeSoldOut ? "line-through" : ""
                  }}
                >
                  ${type.price / 100}
                </td>
                <td>
                  {typeSoldOut ? (
                    <div style={{ textAlign: "center" }}>Sold out!</div>
                  ) : (
                    <QuantityPicker
                      disabled={disabled}
                      quantity={quantity}
                      name={type.id ? `${type.name}[${type.id}]` : type.name}
                      onChange={quantity => handleQuantity(type, quantity)}
                    />
                  )}
                </td>
                <td>
                  {almostSoldOut && <span>Only {type.available} left.</span>}
                </td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr style={{ fontWeight: "bold" }}>
            <td>Totals</td>
            <td style={{ textAlign: "center" }}>${totals.price / 100}</td>
            <td style={{ textAlign: "center" }}>{totals.quantity}</td>
            <td>
              {workshopData.seatsAvailable <= 5 && (
                <span>Only {workshopData.seatsAvailable} left.</span>
              )}
            </td>
          </tr>
          <tr>
            <td colSpan="2" />
            <td style={{ textAlign: "center" }}>
              <button type="submit">Purchase</button>
            </td>
          </tr>
        </tfoot>
      </table>
      {workshopData.invalidSubscriberCode ? (
        <p>
          Sorry, that code isn't valid.
          <br />
          <button type="button" onClick={() => send("ADD_SUBSCRIBER_CODE")}>
            Try a new code
          </button>
        </p>
      ) : !subscriberCode ? (
        <p>
          <button
            type="button"
            onClick={() => {
              send("ADD_SUBSCRIBER_CODE")
            }}
          >
            Use Subscriber Code
          </button>
          <br />
          Subscribers to our online courses get 20% off.
          <br />
          <a href="/courses">Sign up today</a>
        </p>
      ) : null}
    </form>
  )
}

// Allows users to click the buttons, use arrow keys, or manual
// enter values into the field
function QuantityPicker({ onChange, name, quantity, disabled }) {
  let [deletedEverything, setDeletedEverything] = React.useState(false)

  let increment = () => onChange(quantity + 1)
  let decrement = () => onChange(Math.max(0, quantity - 1))

  let handleChange = event => {
    let value = parseInt(event.target.value, 10)
    if (isNaN(value)) {
      setDeletedEverything(true)
      onChange(0)
    } else {
      setDeletedEverything(false)
      onChange(value)
    }
  }

  let handleKeyDown = event => {
    setDeletedEverything(false)
    if (event.key === "ArrowDown") {
      event.preventDefault()
      decrement()
    } else if (event.key === "ArrowUp") {
      event.preventDefault()
      increment()
    }
  }

  let handleBlur = event => {
    if (deletedEverything) {
      setDeletedEverything(false)
      onChange(0)
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <button disabled={quantity === 0} type="button" onClick={decrement}>
        -
      </button>
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        name={name}
        value={deletedEverything ? "" : quantity}
        size={3}
        style={{ textAlign: "center" }}
        onKeyDown={handleKeyDown}
      />
      <button type="button" disabled={disabled} onClick={increment}>
        +
      </button>
    </div>
  )
}