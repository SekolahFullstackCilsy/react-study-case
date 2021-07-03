import Menu from "../components/menu"
import Footer from "../components/footer"

const withTemplate = (WrappedComponent) => {
  return (props) => (
    <div>
      <Menu />
      <WrappedComponent {...props} />
      <Footer />
    </div>
  )
}

export { withTemplate }