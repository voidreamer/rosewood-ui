import { Button } from './Button'

/** Basic button variants */
export const Variants = () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="accent-outline">Accent Outline</Button>
  </div>
)

/** Button sizes */
export const Sizes = () => (
  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
)

/** Special states */
export const States = () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <Button loading>Loading</Button>
    <Button disabled>Disabled</Button>
    <Button pill>Pill Shape</Button>
    <Button block>Full Width</Button>
  </div>
)
