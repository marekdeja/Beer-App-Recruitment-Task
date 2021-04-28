import {  useState,  CSSProperties } from "react"
// import * as styles from './DetailsPage.module.scss'
const styles = require('./DetailsPage.module.scss');

export const DetailsPage = () => {

    const [beer, setBeer] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const fetchedData = await getFlashcards();
    //         return fetchedData
    //     }
    //     fetchData().then(res => setData(res))
    // }, [])


    return <div style={styles.detailsPage}>
<div>
    OBRAZEK
    </div>
    <div>
        <h1>NAME</h1>
        <p>firstBrewed</p>
        <p>abv</p>
        <p>description</p>
    </div>

    </div>
    
}