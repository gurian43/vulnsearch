import { Box } from '@chakra-ui/react'

export const AppBackground = () => (
	<>
		<Box
			position="absolute"
			inset="0"
			pointerEvents="none"
			bgGradient="radial(at 50% 18%, #422070 0%, transparent 46%)"
		/>
		<Box
			position="absolute"
			w="125%"
			h="400px"
			left="-12%"
			bottom="-220px"
			border="1px solid"
			borderColor="#7842bb66"
			borderRadius="50%"
			transform="rotate(-8deg)"
			boxShadow="0 -30px 90px #6b36aa33, inset 0 20px 55px #632ca522"
			pointerEvents="none"
		/>
		<Box
			position="absolute"
			w="125%"
			h="310px"
			left="-18%"
			bottom="-190px"
			border="1px solid"
			borderColor="#a369e844"
			borderRadius="50%"
			transform="rotate(7deg)"
			pointerEvents="none"
		/>
	</>
)