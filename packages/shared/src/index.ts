export { Aside } from './components/widgets/aside'
export { Header } from './components/widgets/header'
export { Title } from './components/shared/title'
export { Button } from './components/shared/button'
export { SignForm } from './components/widgets/sign-form'
export { InputForm } from './components/features/input-form'
export { SearchPanel } from './components/widgets/search-panel'
export { GeneralSvgSelector } from './components/generalSvgSelector'
export const Colours = {
    background_color: '#0B1437',
    background_light_color: '#0b2382',
    block_color: '#111C44',
    text_color: '#fafafa',
    active_color: '#7551FF'
}
export * as Style from './styles/style.sass'
export * as Reset from './styles/reset.sass'
export { TitleSizes } from './lib/enum/titleSizes'
export { ButtonTypes } from './lib/enum/buttonTypes'
export { ButtonSizes } from './lib/enum/buttonSizes'
export { InputFormTypes } from './lib/enum/inputFormTypes'
export { generalSvgNames } from './lib/enum/generalSvgNames'
export { userTypes } from './config/globalConfig'
export { getTitleForCurrentPage } from './lib/helpers/getTitleForCurrentPage'
export { useTypedSelector } from './lib/hooks/useTypedSelector'