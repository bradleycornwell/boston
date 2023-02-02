import { default as Nuka } from 'nuka-carousel/lib/carousel';
import ReactPlayer from 'react-player';

function Carousel({ items }: { items: any }) {
	return (
		<div className="w-full my-2 rounded">
			<Nuka
				slidesToShow={1}
				renderCenterLeftControls={({}) => <></>}
				renderCenterRightControls={({}) => <></>}
				adaptiveHeight
			>
				{items.map((media: any, idx: number) =>
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
			</Nuka>
		</div>
	);
}

export default Carousel;
