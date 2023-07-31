import React from 'react'
// Libs.
import { Disclosure } from '@headlessui/react'
import { selectIcon } from '@/utils/selectIconUtil'
// Styles.
import textStyles from '@/styles/text.module.css'
import layoutStyles from '@/styles/layout.module.css'
import { incorporateClasses } from '@/utils/cssUtils'

interface IProps {
  head: string | JSX.Element
  body: string | JSX.Element
}
const Accordeon: React.FC<IProps> = (props) => {
  const { head, body } = props
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className={incorporateClasses([textStyles.text__30, (isOpen ? "border-blueRibbon" : "border-white"), "border-b-[1px] text-white p-[10px]"])}>
      <Disclosure>
        {({ open }) => {

          setIsOpen(open)

          return (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <div className={incorporateClasses([layoutStyles.x__between,textStyles.text__26, "w-full"])}>
                  {head}
                  {open ? (selectIcon("circle-minus")) : (selectIcon("circle-plus"))}
                </div>

              </Disclosure.Button>
              <Disclosure.Panel className={incorporateClasses([textStyles.text__24,"px-4 pt-4 pb-2 text-sm text-gray"])}>
                {body}
              </Disclosure.Panel>
            </>
          )
        }}
      </Disclosure>
    </div >
  )
}

export default Accordeon
