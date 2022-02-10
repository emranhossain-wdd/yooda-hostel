import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
    UserCircleIcon,
    LogoutIcon,
    AnnotationIcon,
} from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut, admin } = useAuth();

    return (
        <div>
            <Popover className="relative bg-green-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link to="/">
                                {/* logo */}
                                <div className="flex items-center">
                                    <h2 className='text-white font-mono font-bold text-2xl'>yooda</h2>
                                </div>
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-green-400 hover:text-green-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden md:flex space-x-10 items-center">
                            {
                                admin && <Link to="/dashboard/add-food" className="text-base font-medium text-white hover:text-gray-300">
                                    Add food
                                </Link>
                            }
                            {
                                admin && <Link to="/dashboard/add-student" className="text-base font-medium text-white hover:text-gray-300">
                                    Add student
                                </Link>
                            }
                            <Link to="/compare" className="text-base font-medium text-white hover:text-gray-300">
                                Compare
                            </Link>

                            {user?.email && <Popover className="relative">
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={(
                                                open ? 'text-white' : 'text-white',
                                                'group bg-transparent text-white rounded-md inline-flex items-center text-base font-medium focus:outline-none'
                                            )}
                                        >
                                            <UserCircleIcon
                                                className={(
                                                    open ? 'text-green-600' : 'text-green-400',
                                                    'ml-2 h-8 w-8 group-hover:text-green-700'
                                                )}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 max-w-md sm:px-0">
                                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div className="relative grid gap-4 bg-gray-100 px-5 py-6 sm:gap-2 sm:p-6">
                                                        <Link to="/dashboard/myblogs">
                                                            <div className="flex hover:bg-gray-600 rounded-lg text-yellow-500 p-3">
                                                                <AnnotationIcon className="h-6 w-6 text-yellow-400" aria-hidden="true" />
                                                                <p className="ml-4">My&nbsp;Blogs</p>
                                                            </div>
                                                        </Link>
                                                        <div onClick={logOut} className="flex icon-parent hover:bg-green-600 rounded-lg hover:text-white text-green-500 p-3">
                                                            <LogoutIcon className="h-6 w-6 icon" aria-hidden="true" />
                                                            <p className="ml-4">Sign Out</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>}
                        </Popover.Group>
                        {!user?.email &&
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                <Link to="/signin" className="whitespace-nowrap text-base font-medium text-white hover:text-slate-800">
                                    Sign in
                                </Link>
                                <Link
                                    to="/signup"
                                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-lg text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700"
                                >
                                    Sign up
                                </Link>

                            </div>
                        }
                    </div>
                </div>

                {/* mobile menu */}

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://upload.wikimedia.org/wikipedia/commons/archive/e/ec/20140815011948%21Go_on_Logo.svg"
                                            alt="Workflow"
                                        />
                                    </div>
                                    {/* menu icon */}
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6 px-5 space-y-6">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    <Link to="/dashboard/newblog" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        New blog
                                    </Link>
                                    <Link to="/compare" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Compare
                                    </Link>
                                </div>
                                {/* mobile menu bottom */}
                                <div>
                                    <Link
                                        to="/signup"
                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700"
                                    >
                                        Sign up
                                    </Link>
                                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                                        Existing customer?{' '}
                                        <Link to="/signin" className="text-green-600 hover:text-green-500">
                                            Sign in
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    );
};

export default Header;