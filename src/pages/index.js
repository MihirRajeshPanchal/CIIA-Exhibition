import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image, Icon, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu, Formspree } from "@quarkly/components";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
					Awesome Company
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
				</Menu>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0px 60px 0px">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="flex-start"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="flex-start"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="24px 0px 16px 0px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					lg-width="100%"
				>
					Making trip is fun. Travel with friends.
				</Text>
				<Text
					margin="0px 0px 48px 0px"
					color="--greyD3"
					font="--lead"
					lg-text-align="center"
					lg-width="100%"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
				<Box
					display="flex"
					align-items="flex-start"
					margin="0px 0px 32px 0px"
					lg-width="50%"
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 16px 0px 0px"
					md-width="100%"
					md-margin="0px 0px 32px 0px"
					md-padding="0px 0px 0px 0px"
				>
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 0px 0px"
						font="--headline3"
						background="--color-orange"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
					>
						1
					</Text>
					<Box margin="0px 0px 0px 22px">
						<Text margin="0px 0px 8px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
							Find your trip partner
						</Text>
						<Text margin="0px 0px 0px 0px" color="--greyD3" font="--base" lg-text-align="left">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
						</Text>
					</Box>
				</Box>
				<Box
					display="flex"
					align-items="flex-start"
					lg-width="50%"
					lg-padding="0px 0px 0px 16px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
				>
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 0px 0px"
						font="--headline3"
						background="--color-orange"
						border-radius="50px"
						display="flex"
						align-items="center"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
					>
						2
					</Text>
					<Box margin="0px 0px 0px 22px">
						<Text margin="0px 0px 8px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
							Plan trip with easy steps
						</Text>
						<Text margin="0px 0px 0px 0px" color="--greyD3" font="--base" lg-text-align="left">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
						</Text>
					</Box>
				</Box>
			</Box>
			<Box
				display="flex"
				width="50%"
				justify-content="flex-end"
				overflow-y="hidden"
				overflow-x="hidden"
				lg-width="100%"
				padding="0px 0px 0px 16px"
				align-items="center"
				lg-justify-content="center"
				lg-padding="0px 0px 0px 0px"
			>
				<Image
					src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/phone22.png?v=2021-08-26T11:41:54.452Z"
					max-width="100%"
					transform="translateY(10px)"
					transition="transform 0.5s ease-in-out 0s"
					hover-transform="translateY(0px)"
				/>
			</Box>
		</Section>
		<Section
			padding="40px 0 40px 0"
			background="linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1500&q=80) center center/cover no-repeat"
			min-height="100vh"
			lg-padding="80px 0 80px 0"
			md-padding="96px 0 96px 0"
			sm-padding="72px 0 96px 0"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				justify-content="center"
				align-items="center"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				sm-margin="0px 0px 40px 0px"
				margin="0px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				md-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--light"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
					width="80%"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					sm-width="100%"
				>
					Polygon Cascade Sport Mountain Bike
				</Text>
				<Text
					margin="0px 0px 32px 0px"
					color="#FFFFFF"
					font="--lead"
					lg-text-align="center"
					text-align="center"
				>
					Is a reliable companion for day-to-day use and sport
				</Text>
				<Link
					href="#"
					padding="12px 24px 12px 24px"
					color="--dark"
					background="--color-secondary"
					text-decoration-line="initial"
					font="--lead"
					border-radius="8px"
					margin="0px 0px 0px 0px"
					transition="background-color 0.2s ease-in-out 0s"
					hover-background="--color-orange"
					sm-margin="0px 0px 0px 0px"
					sm-text-align="center"
					hover-transition="background-color 0.2s ease-in-out 0s"
				>
					Show More
				</Link>
			</Box>
		</Section>
		<Section padding="88px 0 88px 0" background="--color-dark">
			<Override slot="SectionContent" max-width="1220px" flex-direction="row" flex-wrap="wrap" />
			<Box
				width="100%"
				padding="15px 15px 15px 15px"
				display="flex"
				flex-direction="column"
				justify-content="center"
				align-items="center"
			>
				<Text margin="0px 0px 24px 0px" font="--headline1" color="#ffffff">
					Stats
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--lead"
					color="--light"
					width="45%"
					text-align="center"
					lg-width="100%"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
			</Box>
			<Box
				width="100%"
				margin="30px 0px 30px 0px"
				border-radius="16px"
				background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1595815393077-018a6d4e0b59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1566&q=80) 0% 0% /cover no-repeat scroll padding-box"
				min-height="336px"
				sm-min-height="200px"
			/>
			<Box
				width="25%"
				padding="15px 15px 15px 15px"
				display="flex"
				align-items="flex-start"
				justify-content="center"
				flex-direction="column"
				lg-width="50%"
				sm-width="100%"
			>
				<Text margin="0px 0px 16px 0px" font="--headline1" color="--light">
					85%
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--orange" text-align="center">
					Lorem ipsum dolor sit amet
				</Text>
			</Box>
			<Box
				width="25%"
				padding="15px 15px 15px 15px"
				display="flex"
				align-items="flex-start"
				justify-content="center"
				flex-direction="column"
				lg-width="50%"
				sm-width="100%"
			>
				<Text margin="0px 0px 16px 0px" font="--headline1" color="--light">
					16%
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--orange" text-align="center">
					Lorem ipsum dolor sit amet
				</Text>
			</Box>
			<Box
				width="25%"
				padding="15px 15px 15px 15px"
				display="flex"
				align-items="flex-start"
				justify-content="center"
				flex-direction="column"
				lg-width="50%"
				sm-width="100%"
			>
				<Text margin="0px 0px 16px 0px" font="--headline1" color="--light">
					45%
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--orange" text-align="center">
					Lorem ipsum dolor sit amet
				</Text>
			</Box>
			<Box
				width="25%"
				padding="15px 15px 15px 15px"
				display="flex"
				align-items="flex-start"
				justify-content="center"
				flex-direction="column"
				lg-width="50%"
				sm-width="100%"
			>
				<Text margin="0px 0px 16px 0px" font="--headline1" color="--light">
					56%
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--orange" text-align="center">
					Lorem ipsum dolor sit amet
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" lg-padding="60px 0 60px 0" sm-padding="30px 0 30px 0" background="--color-dark">
			<Box
				margin="0px 0px 40px 0px"
				md-margin="0px 0px 40px 0px"
				lg-margin="0px 0px 32px 0px"
				display="flex"
				flex-direction="row"
				align-items="center"
				sm-margin="0px 0px 10px 0px"
				justify-content="space-between"
				lg-align-items="center"
				lg-flex-direction="column"
				lg-justify-content="center"
			>
				<Text
					margin="0px 32px 0px 0px"
					font="--headline1"
					color="#ffffff"
					text-align="center"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					lg-margin="0px 0px 12px 0px"
					flex="0 0 auto"
				>
					Comparison
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--lead"
					color="--lightD2"
					text-align="left"
					width="50%"
					md-width="100%"
					lg-width="100%"
					lg-text-align="center"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
			</Box>
			<Box width="100%" display="grid" grid-template-columns="repeat(4, 1fr)" grid-gap="32px">
				<Box display="flex">
					<Box
						display="flex"
						margin="0px 0px 0px 0px"
						flex-wrap="wrap"
						width="100%"
						padding="100px 0px 64px 0px"
						align-items="center"
						flex-direction="column"
						justify-content="center"
						md-padding="92px 0px 64px 0px"
					>
						<Text color="--light" font="--headline3" margin="0px 0px 35px 0px" md-font="normal 500 16px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Feature 1
						</Text>
						<Text color="--light" font="--headline3" margin="0px 0px 35px 0px" md-font="normal 500 16px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Feature 2
						</Text>
						<Text color="--light" font="--headline3" margin="0px 0px 35px 0px" md-font="normal 500 16px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Feature 3
						</Text>
						<Text color="--light" font="--headline3" margin="0px 0px 35px 0px" md-font="normal 500 16px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Feature 4
						</Text>
						<Text color="--light" font="--headline3" margin="0px 0px 35px 0px" md-font="normal 500 16px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Feature 5
						</Text>
						<Text color="--light" font="--headline3" margin="0px 0px 35px 0px" md-font="normal 500 16px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Feature 6
						</Text>
						<Text color="--light" font="--headline3" margin="0px 0px 0px 0px" md-font="normal 500 16px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Feature 7
						</Text>
					</Box>
				</Box>
				<Box sm-padding="15px 4px 15px 4px">
					<Box
						display="flex"
						flex-wrap="wrap"
						width="100%"
						background="--color-primary"
						border-width="1px"
						border-style="solid"
						border-radius="16px"
						padding="32px 0px 64px 0px"
						flex-direction="column"
						align-items="center"
					>
						<Text
							color="--light"
							font="--headline3"
							margin="0px 0px 0px 0px"
							lg-text-align="center"
							lg-font="normal 600 20px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							md-font="normal 500 12px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							height="72px"
							lg-height="64px"
						>
							Our company
						</Text>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box margin="0px 0px 0px 0px" background="rgba(247, 251, 255, 0.15)" border-radius="100%" height="40px">
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
					</Box>
				</Box>
				<Box sm-padding="15px 4px 15px 4px">
					<Box
						display="flex"
						flex-wrap="wrap"
						width="100%"
						background="--color-darkL2"
						border-width="1px"
						border-style="solid"
						border-radius="16px"
						padding="32px 0px 64px 0px"
						flex-direction="column"
						align-items="center"
					>
						<Text
							color="--light"
							font="--headline3"
							margin="0px 0px 0px 0px"
							lg-text-align="center"
							lg-font="normal 600 20px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							md-font="normal 500 12px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							height="72px"
							lg-height="64px"
						>
							Competitor 1
						</Text>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="--color-darkL1"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdClose}
								width="40px"
								height="40px"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
								opacity=".25"
								size="30px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="--color-darkL1"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdClose}
								width="40px"
								height="40px"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
								opacity=".25"
								size="30px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="--color-darkL1"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdClose}
								width="40px"
								height="40px"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
								opacity=".25"
								size="30px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box margin="0px 0px 0px 0px" background="rgba(247, 251, 255, 0.15)" border-radius="100%" height="40px">
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
					</Box>
				</Box>
				<Box sm-padding="15px 4px 15px 4px">
					<Box
						display="flex"
						flex-wrap="wrap"
						width="100%"
						background="--color-darkL2"
						border-width="1px"
						border-style="solid"
						border-radius="16px"
						padding="32px 0px 64px 0px"
						flex-direction="column"
						align-items="center"
					>
						<Text
							color="--light"
							font="--headline3"
							margin="0px 0px 0px 0px"
							lg-text-align="center"
							lg-font="normal 600 20px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							md-font="normal 500 12px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							height="72px"
							lg-height="64px"
						>
							Competitor 2
						</Text>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="--color-darkL1"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdClose}
								width="40px"
								height="40px"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
								opacity=".25"
								size="30px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box margin="0px 0px 0px 0px" background="--color-darkL1" border-radius="100%" height="40px">
							<Icon
								category="io"
								icon={IoMdClose}
								width="40px"
								height="40px"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
								opacity=".25"
								size="30px"
							/>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0">
			<Box
				display="flex"
				align-items="center"
				justify-content="center"
				flex-direction="column"
				margin="0px 0px 32px 0px"
				width="100%"
			>
				<Text margin="0px 0px 0px 0px" font="--headline1" color="--dark" text-align="center">
					Our Team
				</Text>
				<Text
					margin="16px 0px 0px 0px"
					font="--lead"
					display="block"
					width="50%"
					text-align="center"
					color="--darkL2"
					lg-width="100%"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
			</Box>
			<Box
				display="grid"
				lg-flex-wrap="wrap"
				align-items="stretch"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="16px"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
				width="100%"
			>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					padding="24px 24px 0px 24px"
				>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
					>
						<Image
							border-radius="50%"
							src="https://images.unsplash.com/photo-1554651802-57f1d69a4944?auto=format&fit=crop&w=500&q=80"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							display="block"
							width="100%"
							max-height="100%"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px">
						<Text
							margin="21px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Sam Smith
						</Text>
						<Text
							margin="16px 0px 26px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--greyD2"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</Text>
					</Box>
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					padding="24px 24px 0px 24px"
				>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
					>
						<Image
							border-radius="50%"
							src="https://images.unsplash.com/photo-1599870418764-c38abcfb955a?auto=format&fit=crop&w=400&q=80"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							display="block"
							width="100%"
							max-height="100%"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px">
						<Text
							margin="21px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Mason Johnson
						</Text>
						<Text
							margin="16px 0px 26px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--greyD2"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</Text>
					</Box>
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					padding="24px 24px 0px 24px"
				>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
					>
						<Image
							border-radius="50%"
							src="https://images.unsplash.com/photo-1602480370486-ddc38af362cb?auto=format&fit=crop&w=500&q=80"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							display="block"
							width="100%"
							max-height="100%"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px">
						<Text
							margin="21px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Adriana Williams
						</Text>
						<Text
							margin="16px 0px 26px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--greyD2"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</Text>
					</Box>
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					padding="24px 24px 0px 24px"
				>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
					>
						<Image
							border-radius="50%"
							src="https://images.unsplash.com/photo-1619950466709-02c2bf682442?auto=format&fit=crop&w=300&q=80"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							display="block"
							width="100%"
							max-height="100%"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px">
						<Text
							margin="21px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Ethan Tremblay
						</Text>
						<Text
							margin="16px 0px 26px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--greyD2"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1547619292-240402b5ae5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80)"
		>
			<Override slot="SectionContent" md-align-items="center" />
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap" width="100%">
				<Box padding="16px 16px 16px 16px" width="50%" md-width="100%">
					<Box sm-display="flex" sm-flex-direction="column" sm-align-items="flex-start">
						<Box
							padding="0 0 0 64px"
							sm-padding="64px 0 0 0"
							margin="32px 0 0 0"
							max-width="360px"
							position="relative"
							sm-display="flex"
							sm-flex-direction="column"
							sm-width="100%"
							sm-max-width="100%"
						>
							<Icon
								position="absolute"
								size="48px"
								top="0"
								left="0"
								category="md"
								icon={MdLocationOn}
							/>
							<Text as="h4" margin="6px 0" font="--base" sm-width="100%">
								Visit us
							</Text>
							<Text as="p" margin="6px 0" font="--headline3" sm-width="100%">
								4998 Hanover Street, New York, 10011
							</Text>
						</Box>
						<Box
							padding="0 0 0 64px"
							sm-padding="64px 0 0 0"
							margin="64px 0 0 0"
							max-width="360px"
							position="relative"
							sm-display="flex"
							sm-flex-direction="column"
							sm-width="100%"
							sm-max-width="100%"
						>
							<Icon
								position="absolute"
								size="48px"
								top="0"
								left="0"
								category="md"
								icon={MdEmail}
							/>
							<Text as="h4" margin="6px 0" font="--base" sm-width="100%">
								Email us
							</Text>
							<Text as="p" margin="6px 0" font="--headline3">
								<Link
									href="mailto:hello@company.com"
									text-decoration="none"
									hover-text-decoration="underline"
									color="--light"
									sm-width="100%"
								>
									hello@company.com
								</Link>
							</Text>
						</Box>
						<Box
							padding="0 0 0 64px"
							margin="64px 0 0 0"
							max-width="360px"
							position="relative"
							sm-display="flex"
							sm-flex-direction="column"
							sm-width="100%"
							sm-max-width="100%"
							sm-padding="64px 0 0 0"
						>
							<Icon
								position="absolute"
								size="48px"
								top="0"
								left="0"
								category="md"
								icon={MdPhone}
								sm-display="block"
							/>
							<Text as="h4" margin="6px 0" font="--base" sm-width="100%">
								Call us
							</Text>
							<Text as="p" margin="6px 0" font="--headline3" sm-width="100%">
								+1 (234) 567-89-00
								<br />
								+1 (234) 567-89-00
							</Text>
						</Box>
						<Box
							padding="0 0 0 64px"
							sm-padding="0"
							margin="48px 0"
							max-width="360px"
							position="relative"
							display="flex"
						>
							<Icon
								category="fa"
								icon={FaFacebookF}
								width="48px"
								height="48px"
								size="24px"
								margin-right="16px"
								background="--color-primary"
								border-radius="50%"
							/>
							<Icon
								category="fa"
								icon={FaTwitter}
								width="48px"
								height="48px"
								size="24px"
								margin-right="16px"
								background="--color-primary"
								border-radius="50%"
							/>
							<Icon
								category="fa"
								icon={FaLinkedinIn}
								width="48px"
								height="48px"
								size="24px"
								margin-right="16px"
								background="--color-primary"
								border-radius="50%"
							/>
						</Box>
					</Box>
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" md-width="100%" sm-padding="0px 0px 0px 0px">
					<Box>
						<Box
							max-width="360px"
							padding="56px 48px"
							margin="0 0 0 auto"
							md-max-width="100%"
							background="--color-primary"
							sm-padding="24px 12px 36px 12px"
						>
							<Text
								as="h3"
								font="--headline3"
								margin="0 0 20px 0"
								sm-padding="0px 8px 0px 8px"
								sm-margin="0 0 8px 0"
							>
								Leave us message
							</Text>
							<Formspree endpoint="xeqpgrlv">
								<Box gap="16px" display="flex" flex-direction="row" flex-wrap="wrap">
									<Box padding="8px 8px 8px 8px" width="100%" display="flex" flex-direction="column">
										<Text font="--base" margin="0 0 4px 0">
											Name
										</Text>
										<Input width="100%" name="name" type="text" />
									</Box>
									<Box padding="8px 8px 8px 8px" width="100%" display="flex" flex-direction="column">
										<Text font="--base" margin="0 0 4px 0">
											Email
										</Text>
										<Input width="100%" type="email" name="email" />
									</Box>
									<Box padding="8px 8px 8px 8px" width="100%" display="flex" flex-direction="column">
										<Text font="--base" margin="0 0 4px 0">
											Message
										</Text>
										<Input as="textarea" rows="4" width="100%" name="message" />
									</Box>
									<Box
										padding="8px 8px 8px 8px"
										width="100%"
										display="flex"
										flex-direction="column"
										align-items="flex-end"
									>
										<Button background="--color-dark">
											Send
										</Button>
									</Box>
								</Box>
							</Formspree>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"63cb8d949faa0f00208ff7eb"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});