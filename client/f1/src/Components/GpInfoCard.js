import './GpInfoCard.css'
import CalendarIcon from './calendar.png'
function GpInfoCard(props) {
    const base64String = "iVBORw0KGgoAAAANSUhEUgAAAZcAAACuCAMAAADNurDuAAAAQlBMVEVHcEz////////////////////////////////////////////////////////////////////////////////////1bZCPAAAAFXRSTlMAk/SisMwj3BlB6YAuh744SlVwYQ36GetJAAAMM0lEQVR42u2dx2KtIBBARRBRior6/7/6Fq/ZaAMqGmeb5ObKEaYPRfHJXUI78S1CZiK4Kud5niuCeD9965GHNHheSouab00y2Ctk3kktu29h7pVxPhb8bZo7Bc1Gwd+euUsYmW3C2bsed6JdM4xac861Hhqa7RfFs12qN5jOTPQjR0TV5fbxSoWGHF89NDulf7BD1owcHdDYiMoOzTjPbwTDmlHiqp29pc3rGYXft36U9u8kCQDyT3ROz1Ctz1qsh1GqA1/mMcpfyHoGSp/rKYbpv4jMzip7CBU0w6XM5uWjK304LsMymwdsn7BhGJ+jRObyIHL5rQbrq/eADUOrOCxznaPSH/f6c3lSq+yxNOUcK11+2wUdnQtLNZN75L+Z42XMTrscG1xscTJkHsL0MvjLuiKI66HvBKWMUtFrVGWnYJZa0rDqfW7vkvEds1nHbUWQHjp6vOWnhUGam+9C3G+hzprLYZCvVliOvXCdwKVzGa59xTwU3lO49FsimPfekeI6Ly6jx/4d/v9OzlHlaX2KoTC7qs7L6EQeOv3/77Q5b5dhtVdCrd3M9stCvRjfwzavr+wT5auCIxOZcVk8isexjR7iuoRjKdqs7LHOY82rZ8RhFsZYCcgLl1lx0W7XpH9GBqaL9NjzOhQWL5nhHWP1M8JjyONEfg6X/4teesQDhoxd/cio95RVHGZy7oVlxKnOOGopI7NELCsl2jjfEuJ4DydGpwxwLaOvKHK/ZcCFu86owZKt7Dj5W/pTlm1dVUoRjBHiXOtxGJpGCMqmy7cLzDihWcWaFrvhOMTfmrRLQGVD2dZ1pRQhGCHJtR6H3hTVhcrytMWxn5ABl9oRYVlmkZdWDkPR2afSM84bvF1gKaIup1wGc8T4G0N6tWnndNIqrIe4AuGl7wKMojQ5WZ29Xe0vXZelNu3nE6TCElyGqqK3y/KZ7uci7Y/Dj5W+mE+TlnCA1h7it8vyM/rbuShrQUVnqF9S86lShzYPrurf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"
    return (
        <>
            <div className="card rounded" style={{ border: '0px', 'border-radius': '20%', "margin": "30px", "width": "20rem", 'height': '24rem', 'display': 'flex', 'flexDirection': 'column' }}>
                <div className="parent">
                    <img className="image1 card-img-top" src="https://assets.quintevents.com/m/6b6f5727c4107f3/72_DPI_WEB-F1E-Hungary-2022-Champions-Club-07.jpg" alt="..." />
                    <img className="image2 card-img-top" src={`data:image/png;base64,${base64String}`} alt="..." />
                </div>

                <div className="card-body" style={{ 'flex': '1' }}>
                    <h5 className="card-title">British Grand Prix 2023</h5>
                    <div className="date-container">
                        <img src={CalendarIcon} alt="Calendar" className="calendar-icon" />
                        <p className="card-text">13 - 15 July 2023</p>
                    </div>
                    
                    <p className="card-text">Silverstone Circuit, Great Britain</p>
                </div>
            </div>

        </>
    )
}

export default GpInfoCard;

// {<img src={`data:image/png;base64,${base64String}`} className="card-img-top" alt="..."/>}

//  let data = props.img.data.data
//     const base64String = btoa(String.fromCharCode(...new Uint8Array(data)));
{/* <h4>Grand Prix : {props.name}</h4>
            <h5>Country : {props.country}</h5>
            <img src={`data:image/png;base64,${base64String}`} /> */}