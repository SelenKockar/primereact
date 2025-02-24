import React from 'react';
import TemplateFeatures from '@/components/templates/TemplateFeatures';
import TemplateConfiguration from '@/components/templates/TemplateConfiguration';
import TemplateSeparator from '@/components/templates/TemplateSeparator';
import TemplateHero from '@/components/templates/templateHero/TemplateHero';
import TemplateFeaturesAnimation from '@/components/templates/templateFeaturesAnimation';
import SakaiLogo from './SakaiLogo';

const features2Data = [
    {
        title: 'Fully Responsive',
        description: 'Atlantis is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
        src: '/images/templates/sakai/sakai-features2-responsive.png'
    },
    {
        title: 'Cross Browser Compatible',
        description: 'First class support for Firefox, Safari, Chrome and Edge.',
        src: '/images/templates/apollo/apollo-features2-compatible.png',
        darkSrc: '/images/templates/apollo/apollo-features2-compatible-dark.png'
    },
    {
        title: 'Full SaSS Support',
        description: 'Sass is utilized for both the application and components to provide simplicity and flexibility.',
        src: '/images/templates/apollo/apollo-features2-customizable.png',
        darkSrc: '/images/templates/apollo/apollo-features2-customizable-dark.png'
    },
    {
        title: 'Mobile Experience',
        description: 'Touch optimized enhanced mobile experience with responsive design.',
        src: '/images/templates/sakai/sakai-features2-mobile.png'
    }
];

const animationFeaturesData1 = [
    {
        id: 1,
        title: 'PrimeFlex CSS Utilities',
        description: 'PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more.',
        src: '/images/templates/babylon/features-animation-utilities.png'
    },
    {
        id: 2,
        title: 'PrimeBlocks',
        description: (
            <>
                Fully compatible with{' '}
                <a href="https://blocks.primereact.org/" target="_blank">
                    PrimeBlocks
                </a>
                , choose from the wide range of blocks and customize the way you like. Note that{' '}
                <a href="https://blocks.primereact.org/" target="_blank">
                    PrimeBlocks
                </a>{' '}
                is not included in the template and requires a separate purchase.
            </>
        ),
        src: '/images/templates/babylon/features-animation-blocks.png'
    },
    {
        id: 3,
        title: 'PrimeIcons',
        description: 'Atlantis ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
        src: '/images/templates/babylon/features-animation-icons.png'
    }
];

const animationFeaturesData2 = [
    {
        id: 1,
        title: 'Various Free Themes',
        description: 'Sakai has various free themes to choose from; PrimeOne Design, Bootstrap, Material Design with light and dark options.',
        src: '/images/templates/sakai/features-animation-darkmode.png'
    },
    {
        id: 2,
        title: '2 Menu Orientations',
        description: 'Sakai has 2 menu modes; Static and Overlay',
        src: '/images/templates/atlantis/features-animation-orientations.png',
        type: 'inline-animation',
        inlineFeaturesData: [
            {
                id: 1,
                title: 'Static',
                src: '/images/templates/sakai/Static.png'
            },
            {
                id: 2,
                title: 'Overlay',
                src: '/images/templates/sakai/Overlay.png'
            }
        ]
    }
];

const features1Data = [
    {
        src: '/images/templates/sakai/sakai-github.png',
        title: 'Open Source and Free to Use',
        description: "Explore Sakai, our versatile, open-source React application template. It's free for your every innovation."
    },
    {
        src: '/images/templates/sakai/sakai-ready.png',
        title: 'Ready to Use Pages',
        description: 'Landing, login and error pages are provided as template pages to get started with building your app in no time.'
    }
];

const templateHeroData = {
    logo: <SakaiLogo />,
    pattern: '/images/templates/sakai/sakai-hero-pattern.png',
    dashboard1: '/images/templates/sakai/sakai-hero-dashboard1.png',
    dashboard2: '/images/templates/sakai/sakai-hero-dashboard2.png',
    description: 'Sakai is a free application template for React based on the popular Next.js framework with new App Router.',
    liveHref: 'https://sakai.primereact.org/',
    docHref: 'https://sakai.primereact.org/documentation',
    free: true,
    storeHref: 'https://github.com/primefaces/sakai-react',
    supportHref: 'https://github.com/primefaces/sakai-react/issues'
};

const SakaiSeparator = () => {
    return (
        <TemplateSeparator
            separatorLogo={
                <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2130_100567)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.2923 11.548C10.288 11.642 10.2858 11.7366 10.2858 11.8317C10.2858 15.2102 13.0246 17.949 16.4032 17.949C19.7817 17.949 22.5205 15.2102 22.5205 11.8317C22.5205 11.7343 22.5183 11.6375 22.5138 11.5413C23.1235 11.448 23.7317 11.3408 24.3378 11.2196L24.4013 11.2069C24.4172 11.4131 24.4253 11.6214 24.4253 11.8317C24.4253 16.2621 20.8337 19.8538 16.4032 19.8538C11.9727 19.8538 8.38106 16.2621 8.38106 11.8317C8.38106 11.6244 8.3889 11.4189 8.40437 11.2156L8.42433 11.2196C9.04498 11.3437 9.6678 11.4532 10.2923 11.548ZM19.9854 6.87227C18.9785 6.14373 17.741 5.71429 16.4032 5.71429C15.063 5.71429 13.8234 6.14526 12.8156 6.87619C11.9977 6.7939 11.182 6.68324 10.37 6.54423C11.8403 4.86785 13.9982 3.80952 16.4032 3.80952C18.805 3.80952 20.9604 4.86507 22.4305 6.5376C21.6187 6.67752 20.8031 6.7891 19.9854 6.87227ZM26.2803 10.8311C26.3132 11.1602 26.33 11.4939 26.33 11.8317C26.33 17.3141 21.8856 21.7585 16.4032 21.7585C10.9207 21.7585 6.4763 17.3141 6.4763 11.8317C6.4763 11.4969 6.49287 11.166 6.52521 10.8398L4.64967 10.4646C4.59805 10.9132 4.57153 11.3693 4.57153 11.8317C4.57153 18.3661 9.86875 23.6633 16.4032 23.6633C22.9376 23.6633 28.2348 18.3661 28.2348 11.8317C28.2348 11.3663 28.208 10.9073 28.1557 10.456L26.2803 10.8311ZM26.5412 5.72846L24.5307 6.13055C22.7348 3.57493 19.764 1.90476 16.4032 1.90476C13.0389 1.90476 10.0656 3.57831 8.27016 6.13832L6.26033 5.73634C8.33039 2.29907 12.0983 0 16.4032 0C20.7048 0 24.4702 2.29555 26.5412 5.72846Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M16.1905 11.0192C6.30316 11.5167 0 5.33337 0 5.33337C0 5.33337 9.90476 8.75196 16.1905 8.75196C22.4762 8.75196 32.381 5.33337 32.381 5.33337C32.381 5.33337 26.0778 10.5217 16.1905 11.0192Z"
                            fill="var(--surface-900)"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_2130_100567">
                            <rect width="32.381" height="24" fill="var(--surface-0)" />
                        </clipPath>
                    </defs>
                </svg>
            }
        />
    );
};

const BabylonPage = () => {
    const featuresAnimationTitle = <h2>Features</h2>;

    return (
        <div className="sakai template">
            <TemplateHero {...templateHeroData} />
            <SakaiSeparator />
            <TemplateFeatures featuresData={features1Data} displayType="horizontal" />
            <SakaiSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData2} title={featuresAnimationTitle} animationSeconds={3000} />
            <SakaiSeparator />
            <TemplateConfiguration title="React based on Next.JS" description="Sakai is powered by Next.js to get started in no time following the best practices. Template is implemented purely in React with Typescript." />
            <SakaiSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData1} />
            <SakaiSeparator />
            <TemplateFeatures featuresData={features2Data} displayType="vertical" />
        </div>
    );
};

export default BabylonPage;
