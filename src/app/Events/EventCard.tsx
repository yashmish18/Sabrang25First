import Image from 'next/image';
import styled from 'styled-components';

interface EventProps {
  event: {
    title: string;
    image: string;
    description?: string;
    date?: string;
    prize?: string;
    registration?: string;
  };
  glow: 'gold' | 'silver';
}

const StyledWrapper = styled.div`
  .parent {
    width: 100%;
    height: 100%;
    perspective: 1000px;
  }

  .card {
    height: 100%;
    border-radius: 20px;
    background: linear-gradient(135deg, ${props => props.glow === 'gold' ? 'rgb(255, 215, 0)' : 'rgb(192, 192, 192)'} 0%, ${props => props.glow === 'gold' ? 'rgb(218, 165, 32)' : 'rgb(169, 169, 169)'} 100%);
    transition: all 0.5s ease-in-out;
    transform-style: preserve-3d;
    box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px, rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
    position: relative;
    overflow: hidden;
  }

  .glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 8px;
    border-radius: 15px;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.349) 0%, rgba(255, 255, 255, 0.815) 100%);
    transform: translate3d(0px, 0px, 25px);
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    transition: all 0.5s ease-in-out;
  }

  .content {
    padding: 20px;
    transform: translate3d(0, 0, 26px);
    position: relative;
    z-index: 1;
  }

  .image-container {
    position: relative;
    width: 100%;
    aspect-ratio: 4/3;
    margin-bottom: 15px;
    border-radius: 10px;
    overflow: hidden;
    transform: translate3d(0, 0, 26px);
  }

  .title {
    display: block;
    color: #000;
    font-weight: 900;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .description {
    display: block;
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    margin-bottom: 15px;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .detail-item {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.7);
    font-size: 12px;
  }

  .detail-item svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  .parent:hover .card {
    transform: rotate3d(1, 1, 0, 30deg);
    box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px, rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
  }

  .parent:hover .glass {
    transform: translate3d(0px, 0px, 35px);
  }

  .parent:hover .content {
    transform: translate3d(0, 0, 36px);
  }
`;

export default function EventCard({ event, glow }: EventProps) {
  return (
    <StyledWrapper glow={glow}>
      <div className="parent">
        <div className="card">
          <div className="glass" />
          <div className="content">
            <div className="image-container">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="title">{event.title}</h3>
            {event.description && (
              <p className="description">{event.description}</p>
            )}
            <div className="details">
              {event.date && (
                <div className="detail-item">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.date}
                </div>
              )}
              {event.prize && (
                <div className="detail-item">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {event.prize}
                </div>
              )}
              {event.registration && (
                <div className="detail-item">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  {event.registration}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}
