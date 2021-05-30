import ServerSideSetup from "../helpers/setup/page"

function HomePage(props) {
    console.log(props)
    return (
        <>
            <h1>Hello!</h1>
        </>
    )
}

export async function getServerSideProps(props) {
    let data    = await ServerSideSetup(props, "signin")

    return {
        props: data
    }
}

export default HomePage