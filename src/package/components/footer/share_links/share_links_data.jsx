import React from 'react';
import { FormattedMessage } from 'react-intl';

// import { CopyWrapper } from '../../commons/copy_wrapper/copy_wrapper';

import { ReactComponent as TwitterIcon } from '../../../assets/icons/brands/twitter.svg';
import { ReactComponent as GithubIcon } from '../../../assets/icons/brands/github.svg';
import { ReactComponent as LinkedInIcon } from '../../../assets/icons/brands/linkedin.svg';
import { ReactComponent as MailIcon } from '../../../assets/icons/brands/mail.svg';
// import { ReactComponent as ShareIcon } from '../../../assets/icons/share.svg';

export const SHARE_LINKS_DATA = Object.freeze({
    twitter: {
        icon: TwitterIcon,
        tooltipTranslation: (
            <FormattedMessage
                id="Footer.shareLinks.shareOnTooltip"
                defaultMessage="View Twitter Profile"
                values={{ platform: 'View Twitter Profile' }}
            />
        ),
        link: 'www.google.com'
    },
    github: {
        icon: GithubIcon,
        tooltipTranslation: (
            <FormattedMessage
                id="Footer.shareLinks.shareOnTooltip"
                defaultMessage="View {platform} Profile"
                values={{ platform: 'View GitHub Profile' }}
            />
        ),
        getLink: ({ link }) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURI(link)}`
    },
    linkedIn: {
        icon: LinkedInIcon,
        tooltipTranslation: (
            <FormattedMessage
                id="Footer.shareLinks.shareOnTooltip"
                defaultMessage="View {platform} Profile"
                values={{ platform: 'View LinkedIn Profile' }}
            />
        ),
        getLink: ({ link }) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURI(link)}`
    },
    mail: {
        icon: MailIcon,
        tooltipTranslation: (
            <FormattedMessage
                id="Footer.shareLinks.shareOnTooltip"
                defaultMessage="Email"
                values={{ platform: 'Email Me' }}
            />
        ),
        getLink: ({ link }) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURI(link)}`
    }

});
