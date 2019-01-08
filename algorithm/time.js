const INPUT = [
    [[4, 5], [6, 10], [12, 14]],
    [[4, 5], [5, 9], [13, 16]],
    [[11, 14]]
];

// Example Output:
// [[0,4],[10,11],[16,23]]

const constructSchedule = (scheduleSlots = [], totalHours = 23) => {
    if (scheduleSlots.length === 0) {
        return [];
    }

    let scheduleList = [];

    for (let i = 0; i < scheduleSlots.length; i++) {
        for (let j = 0; j < scheduleSlots[i].length; j++) {
            let slot = scheduleSlots[i][j];

            scheduleList.push(slot);
        }
    }

    // sort schedule list by start time and then end time
    scheduleList.sort(
        (aSlot, bSlot) => aSlot[0] - bSlot[0] || aSlot[1] - bSlot[1]
    );

    let counter = 0;
    let slotsQueue = [];
    let slot = scheduleList.shift();
    let lastStart = counter;
    const lastInterval = scheduleList[scheduleList.length - 1];

    while (slot) {
        let [startTime, endTime] = slot;

        if (counter < startTime) {
            counter++;
        } else {
            if (counter !== lastStart) {
                slotsQueue.push([lastStart, counter]);
            }
            lastStart = endTime;
            counter = endTime;
            slot = scheduleList.shift();
        }
    }

    // if the last appointment end time is less than totalHours
    // then add the new free slot
    if (lastInterval[1] < totalHours) {
        slotsQueue.push([lastInterval[1], totalHours]);
    }

    return slotsQueue;
};

const result = constructSchedule(INPUT);

console.log(result)