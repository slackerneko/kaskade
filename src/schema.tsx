import kd, { oklch, center, grid } from './kaskade';
import { MyButton } from './MyButton';

type Props = {
  color: string;
  size: number;
};

export function Page({ color }: Props) {

  const bool = false;

  const style = kd.create(Page, ({
      children,
      parent,
      decendants,
      container
    }) => ({
      base: {
        [container('width > 15em')]: {
          ...grid({
            columns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '10px'
          }),
          padding: '10px',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        },
        ...center,
        [children(['div'])]: { // base > div
          fontSize: '14px',
          fontWeight: 'bold',
          backgroundColor: {
            default: oklch(1,2,3),
            ':hover': bool && '#007bff', // data-has-bool={bool || undefined}
          }
        },
        [decendants('li')]: { // base li
          fontSize: '12px'
        },
        [parent('ul')]: { // ul:has(base)
          padding: '0'
        },
        [parent(MyButton)]: { // Element:has(base) > div
          [children(['div'])]: {
            '--color': 'red',
          }
        }
      }
    }))

  const colorVarients = kd.create({
    primary: {
      default: 'blue',
      ':hover': 'red',
    },
    secondary: {
      default: 16,
      ':hover': 20,
    }
  })

  return (
    <div {...kd.apply(style.base, colorVarients[color])}>
      <h1>Welcome to Kaskade</h1>
      <p>Kaskade is a powerful and flexible CSS-in-JS library.</p>
    </div>
  )
}

// (Page as ComponentWithStyles<typeof styles).styles = styles
