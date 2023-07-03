export default function BeerCard({name, image, avgRating, }) {
    return (
        <div className='beer-card'>
            <div className='beer-image'>
                <img src={image} alt={name}
                onError={(e) => {
                    e.target.onError = null;
                    e.target.src = 'https://marvel-b1-cdn.bc0a.com/f00000000117406/www.kaufmancontainer.com/assets/1/14/DimRegular/1060975_lo.png'
                }} />
            </div>
            <h2>{name}</h2>
            <p>{'⭐️'.repeat(avgRating)}</p>
        </div>
    )
}