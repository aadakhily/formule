import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

// eslint-disable-next-line react/display-name
export const AccordionItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
        className=' overflow-hidden first:mt-0 first:rounded-t border-b-2 border-b-solid border-b-gray-200'
        {...props}
        ref={forwardedRef}
    >
        {children}
    </Accordion.Item>
));

// eslint-disable-next-line react/display-name
export const AccordionRoot = React.forwardRef(({ children, ...props }, forwardedRef) => (
    <Accordion.Root
        className={`
       mt-px overflow-hidden first:mt-0 first:rounded-t 
    `}
        {...props}
        ref={forwardedRef}
    >
        {children}
    </Accordion.Root>
));

// eslint-disable-next-line react/display-name
export const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
        <Accordion.Trigger
            className='group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-2 text-[13px] font-semibold text-gray-600 leading-none outline-none'
            {...props}
            ref={forwardedRef}
        >
            {children}
            <ChevronDownIcon
                className=" ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                aria-hidden
            />
        </Accordion.Trigger>
    </Accordion.Header>
));

// eslint-disable-next-line react/display-name
export const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
        className='data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]'
        {...props}
        ref={forwardedRef}
    >
        <div className="py-[15px]">{children}</div>
    </Accordion.Content>
));

