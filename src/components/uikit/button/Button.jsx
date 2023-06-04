import { cva } from 'class-variance-authority'

// const button = cva() 

function Button({ children }) {
    return (
        <Button >{children}</Button>
    )
}

export default Button