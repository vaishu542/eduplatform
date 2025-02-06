import React from 'react';

const CourseFooter = () => {
    return (
        <footer className="bg-ash py-12 text-center mt-12">
            <div className="container mx-auto px-4 text-xl font-medium">
                <p className="text-white mb-2">© 2024 Code All rights reserved.</p>
                <p className="text-white mb-2">Learn. Excel. Succeed.</p>
                <p className="text-white">
                    Follow us on{' '}
                    <a
                        href="https://linkedin.com"
                        className="text-orangeCol "
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    ,{' '}
                    <a
                        href="https://twitter.com"
                        className="text-orangeCol "
                        rel="noopener noreferrer"
                    >
                        Twitter
                    </a>
                    , and{' '}
                    <a
                        href="https://facebook.com"
                        className="text-orangeCol "
                        rel="noopener noreferrer"
                    >
                        Facebook
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default CourseFooter;