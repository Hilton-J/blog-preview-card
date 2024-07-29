import './card.css'
import SVG from '../assets/images/illustration-article.svg'
import Avatar from '../assets/images/image-avatar.webp'

const Card = () => {
    return (
        <div className='container'>
            <article className='card'>
                <div className='card_image'>
                    <img src={SVG} alt='aicture' />
                </div>
                <div className='card_text'>
                    <button className='btn pair'>Learning</button>
                    <h4>Published 21 Dec 2023</h4>
                    <h1>HTML & CSS foundations</h1>
                    <p>These languages are the backbone of every website, defining structure, content, and presentation.</p>
                </div>
                <div className='card_user'>
                    <div className='user_image'><img src={Avatar} alt='aicture' /></div>
                    <p className='pair'>Greg Hooper</p>
                </div>
            </article>
        </div>
    )
}

export default Card