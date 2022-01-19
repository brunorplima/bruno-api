import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bruno API</title>
        <meta name="description" content="Data API created by master Bruno!" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Bruno&apos;s</span> API
        </h1>
      </main>

      <div>
        <h2>Current end points:</h2>
      </div>

      <br/><br/><br/>

      <div className='entities'>

        <div className="ent-container">
          <div className="ent-header vendor-header">
            <h3>Vendor</h3>
            <div>/api/vendors</div>
            <div>/api/vendors/:id</div>
          </div>
          <div className="ent-body">
            <div className='ent-prop'>
              <div>⇒ id</div>
              <div><span>number</span><span className='key primary-key'>PK</span></div>
            </div>
            <div className='ent-prop'>
              <div>⇒ name</div>
              <div><span>string</span></div>
            </div>
          </div>
        </div>

        <div className="ent-container">
          <div className="ent-header cost-code-header">
            <h3>Cost Code</h3>
            <div>/api/cost-codes</div>
            <div>/api/cost-codes/:id</div>
          </div>
          <div className="ent-body">
            <div className='ent-prop'>
              <div>⇒ id</div>
              <div><span>number</span><span className='key primary-key'>PK</span></div>
            </div>
            <div className='ent-prop'>
              <div>⇒ code</div>
              <div><span>string</span></div>
            </div>
            <div className='ent-prop'>
              <div>⇒ description</div>
              <div><span>string</span></div>
            </div>
          </div>
        </div>

        <div className="ent-container">
          <div className="ent-header day-header">
            <h3>Day</h3>
            <div>/api/days</div>
            <div>/api/days/:id</div>
          </div>
          <div className="ent-body">
            <div className='ent-prop'>
              <div>⇒ id</div>
              <div><span>number</span><span className='key primary-key'>PK</span></div>
            </div>
            <div className='ent-prop'>
              <div>⇒ date</div>
              <div><span>string</span></div>
            </div>
          </div>
        </div>

        <div className="ent-container">
          <div className="ent-header daily-cost-header">
            <h3>Daily Cost</h3>
            <div>/api/daily-cost</div>
            <div>/api/daily-cost/:id</div>
          </div>
          <div className="ent-body">
            <div className='ent-prop'>
              <div>⇒ id</div>
              <div><span>number</span><span className='key primary-key'>PK</span></div>
            </div>
            <div className='ent-prop'>
              <div>⇒ costCodeId</div>
              <div><span>number</span><span className='key foreign-key'>FK</span></div>
            </div>
            <div className='ent-prop'>
              <div>⇒ vendorId</div>
              <div><span>number</span><span className='key foreign-key'>FK</span></div>
            </div>
            <div className='ent-prop'>
              <div>⇒ dayId</div>
              <div><span>number</span><span className='key foreign-key'>FK</span></div>
            </div>
            <div className='ent-prop'>
              <div>⇒ amount</div>
              <div><span>number</span></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
