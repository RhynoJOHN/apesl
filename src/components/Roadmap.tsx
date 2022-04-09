import styled from "styled-components";

const Container = styled("div")`
    width: 100vw;
    height: auto;
    margin-top: 100px;
    padding: 20px;
    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ListItem = styled("li")`
    margin: 10px;
`

const Roadmap = () => {
    return (
        <Container>
            <h1>Roadmap</h1>
            <h1>Q1 2022</h1>
            <ul style={{padding: "0 20%"}}>
                <ListItem>
                ROADMAP https://discord.gg/W3h7HYgSRy JOIN DISCORD FOR DETAILED ROADMAP
                </ListItem>
                <ListItem>
                   ALSO FOLLOW ME ON TWITTER https://twitter.com/RoundoxMq FOR LATEST UPDATES
                </ListItem>

            </ul>
        </Container>
    )
}

export default Roadmap;