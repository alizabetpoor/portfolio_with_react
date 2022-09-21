export type FlexDirectionType = 'row' | 'row-reverse';

export interface ProjectProps {
	flexDirection: FlexDirectionType;
	projectName: string;
	imageSource: string;
	githubLink: string;
	siteLink: string;
}
