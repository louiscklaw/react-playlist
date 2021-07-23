import * as React from 'react';
import { toaster, ToasterContainer } from 'baseui/toast';
import { Button, SIZE } from 'baseui/button';
import { Block } from 'baseui/block';

export default () => {
  return (
    <ToasterContainer>
      <Button
        onClick={() => {
          let toastKey;
          const msg =
            'Use toaster.info(), toaster.positive(), toaster.warning(), or toaster.negative()';
          const ok = (
            <Block marginTop="15px" display="flex" justifyContent="center">
              <Button
                size={SIZE.compact}
                onClick={() => toaster.clear(toastKey)}>
                Ok
              </Button>
            </Block>
          );
          const showMore = (
            <Block marginTop="15px" display="flex" justifyContent="left">
              <Button
                size={SIZE.compact}
                onClick={() =>
                  toaster.update(toastKey, {
                    children: (
                      <>
                        {msg} to show different notification type. {ok}
                      </>
                    ),
                  })
                }>
                Show more
              </Button>
            </Block>
          );
          toastKey = toaster.info(
            <>
              {msg}
              {showMore}
            </>,
            {
              onClose: () => console.log('Toast closed.'),
              overrides: {
                InnerContainer: {
                  style: { width: '100%' },
                },
              },
            }
          );
        }}>
        Show notification
      </Button>
    </ToasterContainer>
  );
};
