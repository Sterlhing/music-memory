import './App.css'
import React from 'react'
import data from './fs_spotify_payload.json'
import { Accordion, AccordionTab } from 'primereact/accordion'
import { Image } from 'primereact/image'
import { ListBox } from 'primereact/listbox'
import NavBar from './NavBar'
import LoginModal from './LoginModal'
import { LoremIpsum } from 'lorem-ipsum'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      data: {},
      isLoggedIn: false,
      isLoginModalOpen: false,
      login: {
        username: '',
        password: '',
      }
    }
  }

  handleClick(e) {
    this.setState(prevState => ({
      login: {
        username: e.username,
        password: e.password,
      }
    }))
  }

  componentWillMount () {

    this.setState({ data })

    // xxx: once api work complete, uncomment
    // fetch('/api/new-releases') // top 10 new releases currently
    //   .then(x => x.json())
    //   .then(data => {
    //     this.setState({ data })
    //   })
  }

  render() {
    const albums = this.state.data.albums.items
    const newReleases = albums
      .map(album => {
        const lorem = new LoremIpsum({
          sentencesPerParagraph: {
            max: 8,
            min: 4
          },
          wordsPerSentence: {
            max: 16,
            min: 4
          }
        })

        const artistInfos = [
          `album name: ${album.name}`,
          `release date: ${album.release_date}`,
          `total tracks: ${album.total_tracks}`,
          '😵‍💫',
          'album review:',
          lorem.generateSentences(5),
          ' * ',
          ' ** ',
          ' *** ',
          album.external_urls.spotify,
        ]

        return (

          <AccordionTab header={ album.artists[0].name }>
            {/*  fill accordion with artist information */}
            <p>artist information: </p>

            <ListBox
                value={album}
                options={artistInfos}
                Label="artist info"
                className="w-full md:w-14rem" /><Image src={ album.images[0].url } width="101" height="101" preview />
          </AccordionTab>
        )
      })



    return (

      <div>
        <NavBar isLoggedIn={ this.state.isLoggedIn } />
        <LoginModal
          isLoginModalOpen={ this.state.isLoginModalOpen }
          handleSubmit={ this.handleClick }
          />
        <Accordion activeIndex={0}>
          { newReleases }
        </Accordion>

      </div>
    );
  }
}

export default App;
