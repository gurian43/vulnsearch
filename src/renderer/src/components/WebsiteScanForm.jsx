import { useState } from 'react'
import { Button, Flex, Input, Text } from '@chakra-ui/react'

export const WebsiteScanForm = () => {
	const [url, setUrl] = useState('')
	const [isScanning, setIsScanning] = useState(false)

	const handleSubmit = (event) => {
		event.preventDefault()
		if (!url.trim()) return

		setIsScanning(true)
		window.setTimeout(() => setIsScanning(false), 900)
	}

	return (
		<Flex
			as="form"
			onSubmit={handleSubmit}
			h="56px"
			align="center"
			mt="32px"
			p="5px 6px 5px 18px"
			border="1px solid"
			borderColor="#644192"
			borderRadius="12px"
			bg="#170e26dd"
			boxShadow="0 14px 40px #09051166, 0 0 0 5px #9d6ce20d"
			textAlign="left"
		>
			<Text mr="10px" color="#a87ade" fontSize="20px">⌁</Text>
			<Input
				type="url"
				aria-label="Website URL"
				value={url}
				onChange={(event) => setUrl(event.target.value)}
				placeholder="Enter a website URL"
				variant="flushed"
				flex="1"
				border="0"
				borderBottom="0"
				color="#f8f5ff"
				fontSize="13px"
				userSelect="text"
				_focus={{ borderBottom: '0', boxShadow: 'none' }}
				_placeholder={{ color: '#776987' }}
			/>
			<Button
				type="submit"
				h="44px"
				px={{ base: '15px', md: '22px' }}
				borderRadius="9px"
				bg="#935de5"
				color="white"
				fontSize="12px"
				fontWeight="700"
				loading={isScanning}
				loadingText="Scanning..."
				_hover={{ bg: '#a46bea' }}
			>
				Scan <Text as="span" ml="9px" fontSize="16px">→</Text>
			</Button>
		</Flex>
	)
}