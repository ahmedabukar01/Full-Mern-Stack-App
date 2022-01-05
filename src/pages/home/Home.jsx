import Header from '../../header/Header'
import Posts from '../../Components/posts/Posts'
import Sidebar from '../../Components/sidebar/Sidebar'
import './home.css'

export default function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </>
    )
}
