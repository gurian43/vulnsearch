import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { AppBackground } from '../components/AppBackground'
import { WebsiteScanForm } from '../components/WebsiteScanForm'

export const ScannerPage = () => (
	<Flex
		minH="100vh"
		position="relative"
		overflow="hidden"
		flexDirection="column"
		bg="#100b1c"
		color="#f8f5ff"
		fontFamily="body"
		userSelect="none"
	>
		<AppBackground />
		<Flex
			as="main"
			position="relative"
			zIndex="1"
			flex="1"
			align="center"
			justify="center"
			px="24px"
			pb="90px"
		>
			<Box w="100%" maxW="650px" textAlign="center">
				<Heading
					fontSize={{ base: '42px', md: '58px' }}
					lineHeight="1"
					fontWeight="700"
					letterSpacing="-2.5px"
				>
					Vuln
					<Text as="span" color="#ad78ef">Search</Text>
				</Heading>
				<WebsiteScanForm />
			</Box>
		</Flex>
	</Flex>
)