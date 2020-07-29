import React, { useMemo } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { useAdditionalNodes } from '../../hooks/use_additional_nodes';
import { useReceivedGlobalClasses } from '../../hooks/use_received_global_classes';

import { styles } from './avatar_styles';

const useStyles = createUseStyles(styles);

const DEFAULT_IMAGE = 'https://media-exp1.licdn.com/dms/image/C4E03AQH394Pjyw2FLA/profile-displayphoto-shrink_400_400/0?e=1600905600&v=beta&t=1kcy69aN0T8WqRwbTQxzN5RxL5uu5sXVYl6vn-J7mw0';
const AvatarComponent = ({ src, displayedName }) => {
    const classes = useStyles();
    const [receivedGlobalClasses] = useReceivedGlobalClasses('banner.avatar');
    const [nodes] = useAdditionalNodes('banner.avatar', null);

    const pictureSource = useMemo(() => src || DEFAULT_IMAGE, [src]);

    return (
        <div className={cn(classes.container, receivedGlobalClasses.container)}>
            <div className={cn(classes.imageContainer, classes.imageContainer)}>
                <img
                    className={cn(classes.image, receivedGlobalClasses.image)}
                    src={pictureSource}
                    alt={displayedName}
                />
            </div>
            {nodes}
        </div>
    );
};

export const Avatar = AvatarComponent;
