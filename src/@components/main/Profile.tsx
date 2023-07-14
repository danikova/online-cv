import HoverContainer from '@components/HoverContainer';
import { Transition } from '@headlessui/react'
import { useIsInViewport } from '@utils/hooks';
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { FormattedMessage } from 'react-intl';

export function Profile() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const isImgVisible = useIsInViewport(imgRef, true);

  return (
    <>
      <header className='flex gap-8 pb-8'>
        <HoverContainer className='h-[300px] w-[300px] basis-[300px] max-md:hidden'>
          <img ref={imgRef} className='h-[300px] w-[300px] rounded-2xl' src="./profile.picture.jpg" />
        </HoverContainer>
        <HoverContainer className='flex-auto p-8'>
          <div className='flex-auto'>
            <div className='min-h-full flex flex-col'>
              <p className='text-3xl font-bold pb-8 max-md:opacity-0 max-md:h-28'>
                <FormattedMessage id="profile.name" />
              </p>
              <div className='grid grid-cols-[auto_1fr] grid-rows-5 ml-4 gap-y-2 max-lg:grid-cols-1'>
                <p className='lg:justify-self-end pr-1 font-bold'>
                  <FormattedMessage id="profile.dateOfBirth.key" />:
                </p>
                <p>
                  <FormattedMessage id="profile.dateOfBirth.value" />
                </p>
                <p className='lg:justify-self-end pr-1 font-bold'>
                  <FormattedMessage id="profile.nationality.key" />:
                </p>
                <p>
                  <FormattedMessage id="profile.nationality.value" />
                </p>
                <p className='lg:justify-self-end pr-1 font-bold'>
                  <FormattedMessage id="profile.location.key" />:
                </p>
                <a href="https://www.google.com/maps/place/Budapest,+XVI.+ker%C3%BClet/@47.5191306,19.1690793,13z/" className='text-primary-900 hover:underline'>
                  <FormattedMessage id="profile.location.value" />
                </a>
                <p className='lg:justify-self-end pr-1 font-bold'>
                  <FormattedMessage id="profile.mobileNumber.key" />:
                </p>
                <a href="tel:+36705108334" className='text-primary-900 hover:underline'>
                  <FormattedMessage id="profile.mobileNumber.value" />
                </a>
                <p className='lg:justify-self-end pr-1 font-bold'>
                  <FormattedMessage id="profile.emailAddress.key" />:
                </p>
                <a href="mailto:kovacs.daniel.9509@gmail.com" className='text-primary-900 hover:underline'>
                  <FormattedMessage id="profile.emailAddress.value" />
                </a>
              </div>
            </div>
          </div>
        </HoverContainer>
      </header>
      {!isImgVisible && createPortal(
        <Transition
          show={!isImgVisible}
          enter="duration-75"
          enterFrom="opacity-0 -translate-y-20"
          enterTo="opacity-100 translate-y-0"
          leave="duration-75"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-20"
          className='fixed top-0 left-0 transform transition z-50'
        >
          <header className='w-screen h-[4.25rem] bg-slate-200/30 z-10 px-16 pt-4 backdrop-blur-sm max-md:px-4'>
            <div className='min-w-full flex'>
              <HoverContainer className='h-24 w-24'>
                <img className='h-24 w-24 rounded-2xl max-md:rounded-md' src="./profile.picture.jpg" />
              </HoverContainer>
              <span className='text-3xl font-bold pl-[1.5rem]'>
                <FormattedMessage id="profile.name" />
              </span>
            </div>
          </header>
        </Transition>,
        document.body
      )}
      <Transition
        show={!isImgVisible}
        enter="duration-75"
        enterFrom="h-0"
        enterTo="h-[4.25rem]"
        leave="duration-150"
        leaveFrom="h-[4.25rem]"
        leaveTo="h-0"
        className='transition-all max-md:hidden'
      >
      </Transition>
    </>
  );
}
