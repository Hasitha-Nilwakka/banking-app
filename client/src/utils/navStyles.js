import theme from "@/constants/theme"
export const navStyles = ({isActive}) => ({
                    color : isActive ? theme.colors.primaryColor : theme.colors.secondaryColor,
                    fontWeight : isActive ? 'bold' : 'normal'
                })

export default navStyles