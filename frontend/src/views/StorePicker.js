import { getFunName } from '../controllers/Helper'

export default function StorePicker() {
    return (
        <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Please Enter A Store</h2>
            <input
                type="text"
                ref={this.myInput}
                required
                placeholder="Store Name"
                defaultValue={getFunName()}
            />
            <button type="submit">Visit Store →</button>
        </form>
    )
}