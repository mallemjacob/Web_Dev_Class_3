function app(fun) {
    fun()
}

app(() => {
    console.log('cb')
})
