import Carousel from 'nuka-carousel';
import ReactPlayer from 'react-player';

const MyCarousel = ({ items }: { items: any }) => {
	return (
		<div className="my-2 rounded max">
			<Carousel
				slidesToShow={1}
				renderCenterLeftControls={({}) => null}
				renderCenterRightControls={({}) => null}
				renderBottomCenterControls={({ nextSlide, previousSlide }) =>
					items.length > 1 ? (
						<div className="flex text-white">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-6 h-6"
								onClick={previousSlide}
							>
								<path
									fillRule="evenodd"
									d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
									clipRule="evenodd"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-6 h-6"
								onClick={nextSlide}
							>
								<path
									fillRule="evenodd"
									d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
					) : null
				}
			>
				{items.map((media: any, idx: any) =>
					media.fields.file.contentType === 'video/mp4' ? (
						<ReactPlayer
							className="rounded"
							key={idx}
							controls
							width={'100%'}
							height={'100%'}
							playing={false}
							url={`https://${media.fields.file.url}`}
						></ReactPlayer>
					) : (
						<img
							className="rounded h[90%] mx-auto"
							src={`https://${media.fields.file.url}`}
						/>
					)
				)}
			</Carousel>
		</div>
	);
};

export default MyCarousel;
