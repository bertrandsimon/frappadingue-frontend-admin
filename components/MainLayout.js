import { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// REDUCERS
import { loggedName, loggedToken, loggedStatus } from '../reducers/user';

import { useRouter } from 'next/router';
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  BoltIcon,
} from '@heroicons/react/24/outline'

import SignIn from './common/SignIn';
import EventAdd from './event/EventAdd';
import EventListing from './event/EventListing';
import UserListing from './user/UserListing';

import Image from 'next/image';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function MainLayout(props) {

  const dispatch = useDispatch();
  const handleLogout = () => {
    
    dispatch( loggedStatus ())
  }

  const user = useSelector((state) => state.user);

  const componentToDisplay = props.componentToDisplayInRightPanel
  const itemSelected = props.itemSelected
  //console.log('user in reducer :', user)
  //console.log('user.userConnected in reducer :', user.userConnected)
  const navigation = [
    { name: 'Dashboard', icon: HomeIcon, current: false },
    { name: 'Courses', icon: CalendarIcon, current: false },
    { name: 'Clients', icon: UsersIcon, current: false },
    { name: 'Equipes', icon: BoltIcon, current: false },
    { name: 'Commandes', icon: DocumentDuplicateIcon, current: false },
  ]
  
  const [navigationWithCurrentItem, setNavigationWithCurrentItem] = useState(navigation)

  useEffect(() => {
    const navigationUpdated = navigation.map((item) => ({
      ...item,
      current: item.name === itemSelected, 
    }));
    setNavigationWithCurrentItem(navigationUpdated);
  }, []);

  // useEffect(() => {
  //   console.log('Navigation after re-render:', navigation);
  // }, [navigationWithCurrentItem]); // Add navigationWithCurrentItem as a dependency to the effect


  const [sidebarOpen, setSidebarOpen] = useState(false)

  const router = useRouter();

  const handleNavigationClick = (name) => {

    switch (name) {
      case 'Dashboard':
        router.push('/DashboardPage');
        break;
      case 'Courses':
        router.push('/EventsPage');
        break;
      case 'Clients':
        router.push('/UsersPage');
        break;
      case 'Equipes':
        router.push('/TeamsPage');
        break;
      case 'Commandes':
        router.push('/OrdersPage');
        break;
    }

     
  };


  return (


    <>
 
    <div>
   
      
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                    
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
               
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black bg-opacity-80 px-6 pb-2 ring-1 ring-white/10">
                  <div className="flex h-16 shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Frappadingue"
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                     

                        <ul role="list" className="-mx-2 space-y-1">
                          {navigationWithCurrentItem.map((item) => (
                            <li key={item.name} onClick={() => handleNavigationClick(item.name)}>
                              <a
                                
                                
                                className={classNames(
                                  item.current
                                    ? 'bg-gray-800 text-white'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                )}
                              >
                                <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        
                    
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-10 overflow-y-auto bg-black bg-opacity-100 px-6">
          <div className="flex shrink-0 items-center mt-10">
       
            <Image src="/images/admin-logo.png" width={143} height={51}/>
            
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigationWithCurrentItem.map((item) => (
                    <li key={item.name} onClick={() => handleNavigationClick(item.name)}>
                      <a
                        
                        className={classNames(
                          item.current
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold cursor-pointer'
                        )}
                      >
                        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
            
              </li>

              { user.userConnected && 
              
                  <li className="-mx-6 mt-auto" onClick={handleLogout}>
                      <a
                        href="#"
                        className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                      >
                        <img
                          className="h-8 w-8 rounded-full bg-gray-800"
                          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                          alt=""
                        />
                      
                        <span aria-hidden="true">Perrine Frappadingue</span>
                      </a>
                  </li>
              
              }

             


            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button type="button" className="-m-2.5 p-2.5 text-gray-400 lg:hidden" onClick={() => setSidebarOpen(true)}>
          <span className="sr-only">Ouvrir</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-white">Dashboard</div>
        <div onClick={handleLogout} className='cursor-pointer'>
          
          <img
            className="h-8 w-8 rounded-full bg-gray-800"
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
            alt=""
          />
        </div>
      </div>

      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">
              {/* <SignIn></SignIn>              */}
              {/* {componentToDisplay} */}
              { user.userConnected ? componentToDisplay : <SignIn></SignIn> }
          </div>
      </main>
    </div>
  </>

    
  );
}

export default MainLayout;
