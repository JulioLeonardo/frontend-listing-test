# AVIV technical test solution

You can use this file to write down your assumptions and list the missing features or technical revamp that should
be achieved with your implementation.

## Notes

Write here notes about your implementation choices and assumptions.

## Questions

This section contains additional questions your expected to answer before the debrief interview.

- **What is missing with your implementation to go to production?**
  <em> 
    - I believe the app is plenty of things, such as: 
      - login/auth, favourite listings, user profile and config
      - listing details page
      - Metadata implementation
      - Google tag manager or other comparable tools to measure conversion and other metrics
      - filters, search and edit functionality on the main listings page. 
      - Localization in the whole app.
      - Extensive validation on the form.
      - BE returns a small amount of listing, but real app would definitely require pagination / infinite scroll 
      - Reducing the form element render, by hiding it or reducing its size to expand on click.
  </em>

- **How would you deploy your implementation?**
  <em>
  - There are many ways to deploy a static app, we could use Vercel, Heroku, Netlify, or even Amazon S3, but then there 
  is some extra config required.
  </em>

- **If you had to implement the same application from scratch, what would you do differently?**
  <em>
  - I would choose GraphQl over RestAPI, given the flexibility of what to consume.
  - I would develop the lacking functionality
  </em>
- **The application aims at storing hundreds of thousands listings and millions of prices, and be accessed by millions
  of users every month. What should be anticipated and done to handle it?**
  <em>
   - Modern static apps services such Vercel, have taken those concerns into account, and provide scalability out of the box, 
   if we choose to use a cloud, such as Amazon or Google, then we need to worry with scalability, load balancing, security...
   - For monitoring, we could use Sentry
   - Caching could be implemented with react query, or apollo graphQl, for example.
  </em>

  NB : You can update the [given architecture schema](./schemas/Aviv_Technical_Test_Architecture.drawio) by importing it
  on [diagrams.net](https://app.diagrams.net/) 
