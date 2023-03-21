import path from 'path';

export default {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coveragePathIgnorePatterns: ['/node_modules/'],
	moduleDirectories: ['node_modules'],
	moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
	rootDir: '../../',
	testMatch: ['<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)'],
	setupFilesAfterEnv: [path.resolve(__dirname, 'jest-setup.ts')],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|webp|svg)$': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
		'\\.s?css$': 'identity-obj-proxy',
	},
	testEnvironment: 'jsdom',
	modulePaths: ['<rootDir>'],
};
