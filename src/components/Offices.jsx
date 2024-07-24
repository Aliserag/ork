import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Vancouver" invert={invert}>
          333 Seymour St
          <br />
          BC V6B 5A6, Canada
        </Office>
      </li>
      <li>
        <Office name="Toronto" invert={invert}>
          240 Richmond St W
          <br />
          ON M5V 1V6, Canada
        </Office>
      </li>
    </ul>
  )
}
