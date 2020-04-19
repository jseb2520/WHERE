# WHERE webpage

## Folder structure
```bash
.
📦src
 ┣ 📂assets
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📜Lato-Bold.ttf
 ┃ ┃ ┣ 📜Lato-Bold.woff
 ┃ ┃ ┣ 📜Lato-Bold.woff2
 ┃ ┃ ┣ 📜Lato-Regular.ttf
 ┃ ┃ ┣ 📜Lato-Regular.woff
 ┃ ┃ ┗ 📜Lato-Regular.woff2
 ┃ ┣ 📂img
 ┃ ┃ ┣ 📜default-avatar.png
 ┃ ┃ ┣ 📜emilyz.jpg
 ┃ ┃ ┣ 📜favicon.png
 ┃ ┃ ┣ 📜landing-bg.jpg
 ┃ ┃ ┣ 📜not_found.png
 ┃ ┃ ┗ 📜react-logo.png
 ┃ ┣ 📂jss
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜badgeStyle.js
 ┃ ┃ ┃ ┣ 📜buttonStyle.js
 ┃ ┃ ┃ ┣ 📜cardBodyStyle.js
 ┃ ┃ ┃ ┣ 📜cardFooterStyle.js
 ┃ ┃ ┃ ┣ 📜cardHeaderStyle.js
 ┃ ┃ ┃ ┣ 📜cardStyle.js
 ┃ ┃ ┃ ┣ 📜customDropdownStyle.js
 ┃ ┃ ┃ ┣ 📜customInputStyle.js
 ┃ ┃ ┃ ┣ 📜customLinearProgressStyle.js
 ┃ ┃ ┃ ┣ 📜customTabsStyle.js
 ┃ ┃ ┃ ┣ 📜footerStyle.js
 ┃ ┃ ┃ ┣ 📜headerLinksStyle.js
 ┃ ┃ ┃ ┣ 📜headerStyle.js
 ┃ ┃ ┃ ┣ 📜infoStyle.js
 ┃ ┃ ┃ ┣ 📜navPillsStyle.js
 ┃ ┃ ┃ ┣ 📜notFoundStyle.js
 ┃ ┃ ┃ ┣ 📜paginationStyle.js
 ┃ ┃ ┃ ┣ 📜parallaxStyle.js
 ┃ ┃ ┃ ┣ 📜snackbarContentStyle.js
 ┃ ┃ ┃ ┗ 📜typographyStyle.js
 ┃ ┃ ┣ 📂views
 ┃ ┃ ┃ ┣ 📂contact
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂multimedia
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂products
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂research
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📜customCheckboxRadioSwitch.js
 ┃ ┃ ┣ 📜imagesStyles.js
 ┃ ┃ ┣ 📜modalStyle.js
 ┃ ┃ ┣ 📜popoverStyles.js
 ┃ ┃ ┗ 📜tooltipsStyle.js
 ┣ 📂components
 ┃ ┣ 📂Badge
 ┃ ┃ ┣ 📜Badge.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Card
 ┃ ┃ ┣ 📜Card.jsx
 ┃ ┃ ┣ 📜CardBody.jsx
 ┃ ┃ ┣ 📜CardFooter.jsx
 ┃ ┃ ┣ 📜CardHeader.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Clearfix
 ┃ ┃ ┣ 📜Clearfix.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂CustomButtons
 ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂CustomDropdown
 ┃ ┃ ┣ 📜CustomDropdown.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂CustomInput
 ┃ ┃ ┣ 📜CustomInput.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂CustomLinearProgress
 ┃ ┃ ┣ 📜CustomLinearProgress.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂CustomTabs
 ┃ ┃ ┣ 📜CustomTabs.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Grid
 ┃ ┃ ┣ 📜GridContainer.jsx
 ┃ ┃ ┣ 📜GridItem.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂InfoArea
 ┃ ┃ ┣ 📜InfoArea.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂NavPills
 ┃ ┃ ┣ 📜NavPills.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂NotFound
 ┃ ┃ ┣ 📜NotFound.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Pagination
 ┃ ┃ ┣ 📜Pagination.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂SearchInput
 ┃ ┃ ┣ 📜SearchInput.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Typography
 ┃ ┃ ┣ 📜Danger.js
 ┃ ┃ ┣ 📜Info.js
 ┃ ┃ ┣ 📜Muted.js
 ┃ ┃ ┣ 📜Primary.js
 ┃ ┃ ┣ 📜Quote.js
 ┃ ┃ ┣ 📜Small.js
 ┃ ┃ ┣ 📜Success.js
 ┃ ┃ ┗ 📜Warning.js
 ┣ 📂layouts
 ┃ ┗ 📂main
 ┣ 📂views
 ┃ ┣ 📜Contact.jsx
 ┃ ┣ 📜Home.jsx
 ┃ ┣ 📜Multimedia.jsx
 ┃ ┣ 📜Products.jsx
 ┃ ┣ 📜Research.jsx
 ┃ ┗ 📜Services.jsx
 ┗ 📜index.js
 ```
