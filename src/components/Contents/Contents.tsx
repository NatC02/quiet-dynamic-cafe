import styled from 'styled-components';
import Slider from '../Slider/Slider';
import BubbleIcon from '../BubbleIcon/BubbleIcon';
import RefreshArrowSVG from '../SVG/RefreshArrowSVG';
import FastForwardSVG from '../SVG/FastForwardSVG';
import useStore from '../../store/store';
import PlaySVG from '../SVG/PlaySVG';
import PauseSVG from '../SVG/PauseSVG';
import SlowBackSVG from '../SVG/SlowBackSVG';
import { formatTime } from '../../utils/time';
import { useEffect, useMemo, useState } from 'react';
import DayNightCycleSVG from '../SVG/DayNightCycleSVG';
import InwardSVG from '../SVG/InwardSVG';
import OpacitySVG from '../SVG/OpacitySVG';
import * as THREE from 'three';

export default function Contents() {
	const resetTime = useStore((state) => state.resetTime);
	const pauseTime = useStore((state) => state.setIsPaused);
	const isPaused = useStore((state) => state.isPaused);
	const setFactor = useStore((state) => state.setFactor);
	const factor = useStore((state) => state.factor);
	const currentTime = useStore((state) => state.currentTime);

	const currentTheme = useStore((state) => state.currentTheme);
	const setCurrentTheme = useStore((state) => state.setTheme);
	const isDayNightCycle = useStore((state) => state.isDayNightCycle);
	const setIsDayNightCycle = useStore((state) => state.setIsDayNightCycle);

	const startTime = 11;
	const convertTime = useMemo(
		() => currentTime * 14.4 + startTime * 60,
		[currentTime]
	);
	const mimicTime = useMemo(
		() => (convertTime > 1440 ? convertTime - 1440 : convertTime),
		[convertTime]
	);

	const [minimize, setMinimize] = useState(false);
	const [sound, setSound] = useState<THREE.Audio | null>(null);

	useEffect(() => {
		if (isDayNightCycle) {
			if (mimicTime >= 300 && mimicTime < 700) {
				setCurrentTheme('yellow');
			} else if (mimicTime >= 700 && mimicTime < 1100) {
				setCurrentTheme('light');
			} else if (
				mimicTime >= 1100 ||
				(mimicTime > 0 && mimicTime < 300)
			) {
				setCurrentTheme('dark');
			}
		}
		//console.log(mimicTime);
	}, [mimicTime, isDayNightCycle]);

	useEffect(() => {
		// Create an AudioListener and add it to a dummy camera
		const listener = new THREE.AudioListener();
		const camera = new THREE.PerspectiveCamera();
		camera.add(listener);
	
		// Create a global audio source
		const audio = new THREE.Audio(listener);
		const audioLoader = new THREE.AudioLoader();
	
		// Preload the audio buffer
		audioLoader.load('/sounds/ambient.ogg', (buffer) => {
		  audio.setBuffer(buffer);
		  audio.setLoop(true);
		  audio.setVolume(0); // Start with 0 volume (silent)
		  setSound(audio);
		});
	
		// Cleanup function to stop audio when unmounting
		return () => {
		  if (sound) sound.stop();
		};
	  }, []);
	
	  const graduallyChangeVolume = (targetVolume: number, duration: number) => {
		if (!sound) return;
	
		const currentVolume = sound.getVolume();
		const step = (targetVolume - currentVolume) / (duration / 50); // Every 50ms
	
		const interval = setInterval(() => {
		  const newVolume = sound.getVolume() + step;
		  if ((step > 0 && newVolume >= targetVolume) || (step < 0 && newVolume <= targetVolume)) {
			clearInterval(interval);
			sound.setVolume(targetVolume); // Ensure it hits the exact target volume
		  } else {
			sound.setVolume(newVolume);
		  }
		}, 50); // Update every 50ms
	  };
	
	  const handleMinimizeClick = () => {
		setMinimize(!minimize);
	
		// Play audio if minimize is true
		if (!minimize && sound) {
		  sound.play(); // Ensure audio starts playing when minimize is clicked
		  graduallyChangeVolume(0.5, 2000); // Gradually increase volume to 0.5 over 2 seconds
		} else if (minimize && sound) {
		  graduallyChangeVolume(0, 2000); // Gradually decrease volume to 0 over 2 seconds
		}
	  };


	return (
		<Wrapper>
			<Container>
				<Hero>
					<Top>
						<div></div>

						<ColorPickerCont>
							<ColorPicker
								color='#F9F9F9'
								className={
									currentTheme === 'light' ? 'active' : ''
								}
								onClick={() => setCurrentTheme('light')}
							/>

							<ColorPicker
								color='#faee82'
								className={
									currentTheme === 'yellow' ? 'active' : ''
								}
								onClick={() => setCurrentTheme('yellow')}
							/>

							<ColorPicker
								color='#18192f'
								className={
									currentTheme === 'dark' ? 'active' : ''
								}
								onClick={() => setCurrentTheme('dark')}
							/>

							<ColorPicker
								color='linear-gradient(90deg, rgba(30,31,31,1) 49%, rgba(255,255,255,1) 51%)'
								className={
									currentTheme === 'b&w' ? 'active' : ''
								}
								onClick={() => setCurrentTheme('b&w')}
							/>
							
						</ColorPickerCont>

					</Top>

					<Bottom className={minimize ? 'minimize' : ''}>
						<div></div>
						<SliderCont>
							<UpperSliderCont>
								<BubbleIcon
									active={isDayNightCycle}
									onClickCB={() => {
										setIsDayNightCycle(!isDayNightCycle);
									}}>
									<DayNightCycleSVG />
								</BubbleIcon>
								<h3>TIME</h3>

								<BubbleIcon
									onClickCB={handleMinimizeClick}>
									<OpacitySVG />
								</BubbleIcon>

							</UpperSliderCont>

							<Slider />
							<SliderInfo>
								<OtherControlsCont>
									<BubbleIcon onClickCB={resetTime}>
										<RefreshArrowSVG />
									</BubbleIcon>
									<BubbleIcon
										onClickCB={() => pauseTime(!isPaused)}>
										{isPaused ? <PlaySVG /> : <PauseSVG />}
									</BubbleIcon>

								</OtherControlsCont>

								<h2>{formatTime(mimicTime)}</h2>
								<ControlsCont>
									<BubbleIcon
										onClickCB={() => {
											if (factor > 1)
												setFactor(factor / 2);
										}}>
										<SlowBackSVG />
									</BubbleIcon>
									<p>{factor}x</p>
									<BubbleIcon
										onClickCB={() => {
											if (factor < 10)
												setFactor(factor * 2);
										}}>
										<FastForwardSVG />
									</BubbleIcon>
								</ControlsCont>
							</SliderInfo>
						</SliderCont>

						<div></div>
					</Bottom>
				</Hero>
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
	min-height: 100%;
	pointer-events: none;
`;

const Container = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 95%;
	max-width: 1920px;
	min-height: 100%;
	pointer-events: none;
	color: white;

	@media (max-width: 700px) {
		width: 100%;
	}
`;

const Hero = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 100dvh;
`;

const Top = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	justify-content: flex-end;
	align-items: center;
	padding: 30px 0;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding: 30px 50px;
	width: 100%;

	&.minimize {
		opacity: 0.1;
	}

	@media (max-width: 700px) {
		padding: 20px 10px;
	}
`;

const SliderCont = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	pointer-events: all;
	h3 {
		font-size: 28px;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.8);

		@media (max-width: 700px) {
			font-size: 20px;
		}
	}
`;

const UpperSliderCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 50px;
	pointer-events: auto;
`;

const SliderInfo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 40px;
	h2 {
		font-size: 81px;
		font-weight: 700;
		width: 250px;
		text-align: center;
		user-select: none;

		@media (max-width: 700px) {
			font-size: 60px;
		}
	}
	@media (max-width: 700px) {
		flex-direction: column;
		gap: 10px;
	}
`;

const OtherControlsCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 40px;
	@media (max-width: 700px) {
		gap: 10px;
	}
`;

const ControlsCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 12px;
	p {
		user-select: none;
	}
`;

const ColorPickerCont = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	height: 38px;
	flex-wrap: wrap;

	@media (max-width: 700px) {
		padding: 0 20px;
	}
`;

const ColorPicker = styled.div<any>`
	width: 38px;
	height: 38px;
	border-radius: 50%;
	background: ${(props) => props.color};
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	pointer-events: auto;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	&.active {
		width: 28px;
		height: 28px;

		&::after {
			content: '';
			position: absolute;
			width: 38px;
			height: 38px;
			border-radius: 50%;
			border: 2px solid #f9f9f9;
		}
	}
`;

const Logo = styled.h1`
	font-size: 54px;
	font-weight: 700;
	color: #333;
`;
