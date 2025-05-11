import { ThemeToggle } from '@/components/theme-toggle/theme-toggle';
import { Button, Typography } from '@/components/ui';

export default function HomePage() {
	return (
		<div className={'container'}>
			<ThemeToggle />
			<Typography.H1>
				The Impact of Technology on the Workplace: How Technology is Changing
			</Typography.H1>
			<br></br>
			<Typography.H2>
				The Impact of Technology on the Workplace: How Technology is Changing
			</Typography.H2>
			<br></br>
			<Typography.H3>About</Typography.H3>
			<br></br>
			<Typography.P>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam
			</Typography.P>
			<br></br>
			<Typography.Span>Tracey Wilson</Typography.Span>
			<br></br>
			<Button>Subscribe</Button>
			<br></br>
			<Button disabled>Subscribe</Button>
			<br></br>
			<Button variant="outline">View All Post</Button>
			<br></br>
			<Button variant="outline" disabled>
				View All Post
			</Button>
		</div>
	);
}
