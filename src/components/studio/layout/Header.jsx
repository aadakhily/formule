import Button from "../../uikit/button/Button"
function Header() {
    return (
        <header className="py-2 px-4 border-b-2 bg-white border-gray-100 border-b-solid flex items-center justify-between">
            <div>
                fb
            </div>
            <div>form name</div>
            <div>
                <Button>Publish</Button>
            </div>
        </header>
    )
}

export default Header