import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import clsx from "clsx";

type Option = {
  id: number;
  name: any;
};

interface SelectProps {
  lable: string;
  oprtionsList: Option[];
  placeholder?: string;
  defSelected?: number;
  state: Option;
  setState: React.Dispatch<React.SetStateAction<Option>>;
  withTopText?: boolean;
  topText?: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Select: React.FC<SelectProps> = ({
  lable,
  oprtionsList,
  placeholder,
  defSelected,
  state,
  setState,
  withTopText,
  topText,
}) => {
  useEffect(() => {
    if ((defSelected || defSelected === 0) && oprtionsList.length) {
      setState(oprtionsList[defSelected]);
    }
  }, [defSelected]);

  return (
    <div className="relative">
      {withTopText && (
        <span className="absolute text-sm ml-2 text-dark px-1 -top-2 bg-white z-10">
          {topText}
        </span>
      )}
      <Listbox value={state} onChange={setState}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-semibold leading-4 text-dark">
              {lable}
            </Listbox.Label>
            <div className="relative mt-2">
              <Listbox.Button
                className={clsx({
                  "relative h-12 w-full rounded-md py-1.5 pl-3 pr-10 text-left text-gray3 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none sm:text-sm sm:leading-6":
                    true,
                  "bg-white cursor-pointer": oprtionsList.length > 0,
                  "bg-text-secondary cursor-default": oprtionsList.length === 0,
                })}
              >
                <span className="block truncate text-base font-medium">
                  {state && state.id !== 0
                    ? state.name
                    : placeholder
                    ? placeholder
                    : "Bitte auswählen ..."}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
                  <Image
                    src={"./assets/icons/black-arrow.svg"}
                    alt=""
                    width={16}
                    height={10}
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open && oprtionsList.length > 0}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {oprtionsList.map((opt) => (
                    <Listbox.Option
                      key={opt.id}
                      className={({ active }) =>
                        classNames(
                          active ? "bg-yellow text-dark" : "text-dark",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={opt}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            {opt.name}
                          </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-yellow",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default Select;
