import Carousel from 'nuka-carousel';
import ReactPlayer from 'react-player';

const MyCarousel = ({ items }: { items: any }) => {
	return (
		<div className="w-full my-2 rounded">
			<div>test</div>
			<Carousel
				slidesToShow={1}
				renderCenterLeftControls={({}) => <></>}
				renderCenterRightControls={({}) => <></>}
				adaptiveHeight
			>
				{items.map((media: any, idx: any) =>
					media.fields.file.contentType === 'video/mp4' ? (
						<ReactPlayer
							key={idx}
							controls
							width={'100%'}
							playing={false}
							url={`https://${media.fields.file.url}`}
						></ReactPlayer>
					) : (
						<img
							className="rounded"
							src={`https://${media.fields.file.url}`}
						/>
					)
				)}
			</Carousel>
		</div>
	);
};

export default MyCarousel;
