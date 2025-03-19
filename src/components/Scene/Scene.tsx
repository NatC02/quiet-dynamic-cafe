import {
	Environment,
	OrbitControls,
	OrthographicCamera,
	PerspectiveCamera,
	SoftShadows,
	useHelper,
	PerformanceMonitor,
} from '@react-three/drei';
import { Model } from './Model';
import * as THREE from 'three';
import { useRef, useState } from 'react';

import LerpRig from '../LerpRig/LerpRig';

import Effects from './Effects';
import Lights from './Lights';
import { Perf } from 'r3f-perf';

export default function Scene() {
	return (
		<>

			{/* {controlsPerformace.perfVisible && <Perf position={'top-left'} />} */}
			{/* <Perf position={'top-left'} /> */}
		
			<color attach='background' args={['#DDC5A7']} />

			<Lights />

			<Model scale={3.5} />

			<PerspectiveCamera
				fov={30}
				makeDefault
				position={[5, 2, -11]}
				rotation={[0, Math.PI, 0]}
				near={0.1}
				far={10000}
			/>

			<LerpRig
				startX={33}
				startY={28}
				lookAt={[9, 15, 0]}
				propotion={10}
				propotionY={1}
			/>

			{/* <OrbitControls /> */}
		</>
	);
}
