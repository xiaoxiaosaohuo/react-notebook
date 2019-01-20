let instances = []

const register = (comp) => instances.push(comp)
const unregister = (comp) => instances.splice(instances.indexOf(comp), 1)

const historyPush = (path) => {
    history.pushState({}, null, path)
    instances.forEach(instance => instance.forceUpdate())
}

const historyReplace = (path) => {
    history.replaceState({}, null, path)
    instances.forEach(instance => instance.forceUpdate())
}

const matchPath = (pathname, options) => {
    const exact = options.exact || false
    const path = options.path

    if (!path) {
        return {
            path: null,
            url: pathname,
            isExact: true
        }
    }

    const match = new RegExp(`^${path}`).exec(pathname)

    if (!match)
        return null

    const url = match[0]
    const isExact = pathname === url

    if (exact && !isExact)
        return null

    return {
        path,
        url,
        isExact,
    }
}

class Route extends React.Component{
    componentWillMount() {
        addEventListener('popstate', this.handlePop)
        register(this)
    }

    componentWillUnmount() {
        unregister(this)
        removeEventListener('popstate', this.handlePop)
    }

    handlePop() {
        this.forceUpdate()
    }

    render() {
        const {
            path,
            exact,
            component,
            render,
        } = this.props

        const match = matchPath(location.pathname, {
            path,
            exact
        })

        if (!match)
            return null

        if (component)
            return React.cloneElement(component, {
                match
            })

        if (render)
            return render({
                match
            })

        return null
    }
}

class Link extends React.Component{
    handleClick(event) {
        const {
            replace,
            to
        } = this.props

        event.preventDefault()
        replace ? historyReplace(to) : historyPush(to)
    }

    render() {
        const {
            to,
            children
        } = this.props

        return (
            <a href={to} onClick={this.handleClick}>
                {children}
            </a>
        )
    }
}

class Redirect  extends React.Component{
    componentDidMount() {
        const {
            to,
            push
        } = this.props

        push ? historyPush(to) : historyReplace(to)
    }
    render() {
        return null
    }
}

export { Route,Link, Redirect };


