import Button from "../../uikit/button/Button"

function Header() {
    return (
        <header className="py-2 px-4 border-b-2 bg-white border-gray-100 border-b-solid flex items-center justify-between">
            <h2 className="font-bold text-lg">
                FormBuilder
            </h2>

            <div>form name</div>

            <div>
                <Button>Publish</Button>
            </div>
        </header>
    )
}

export default Header