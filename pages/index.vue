<template>
  <div>
    <SectionsNews/>
    <SectionsBenefits/>
    <SectionsPricingPlans/>
    <SectionsNotifications/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: {
        logoUrl: '',
      },
      news: {
        title: 'Get paid for the work you love to do.',
        subtitle:
          'The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to escape the rat race or set up a side hustle, we’ve got you covered.',
        backgroundImage: '',
      },
      benefits: {
        elements: [
          {
            imageUrl: 'images/illustration-passions.svg',
            title: 'Indulge your passions',
            subtitle: `Your passions shouldn't be just for the weekend. Earn a living doing what you love.`,
          },
          {
            imageUrl: 'images/illustration-financial-freedom.svg',
            title: 'Gain financial freedom',
            subtitle: 'Start making money work for you. There’s nothing quite like earning while you sleep.',
          },
          {
            imageUrl: 'images/illustration-lifestyle.svg',
            title: 'Choose your lifestyle',
            subtitle: 'Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.',
          },
          {
            imageUrl: 'images/illustration-work-anywhere.svg',
            title: 'Work from anywhere',
            subtitle: 'Selling online means not being pinned down. Want to work AND travel? Go for it!',
          },
        ],
      },
      pricingPlans: {
        title: 'Our pricing plans',
        subtitle:
          'We only make money when our creators make money. Our plans are always affordable, and it’s completely free to get started.',
        elements: [
          {
            icon: 'images/icon-free.svg',
            title: 'Dip your toe',
            subtitle: 'Just getting started? No problem at all! Our free plan will take you a long way.',
            price: 'Free',
            frecuency: null,
            highlight: false,
            characteristics: [
              {
                description: 'Unlimited products',
                checked: true,
              },
              {
                description: 'Basic analytics',
                checked: true,
              },
              {
                description: 'Limited marketplace exposure',
                checked: true,
              },
              {
                description: '10% fee per transaction',
                checked: true,
              },
            ],
          },
          {
            icon: 'images/icon-paid.svg',
            title: 'Dive right in',
            subtitle: 'Ready for the big time? Our paid plan will help you take your business to the next level.',
            price: '$25.00',
            frecuency: '/ month',
            highlight: true,
            characteristics: [
              {
                description: 'Custom domain',
                checked: true,
              },
              {
                description: 'Advanced analytics and reports',
                checked: true,
              },
              {
                description: 'High marketplace visibility',
                checked: true,
              },
              {
                description: '5% fee per transaction',
                checked: true,
              },
            ],
          },
        ],
      },
      notifications: {
        title: 'Get notified when we launch',
        form: {
          inputs: [
            {
              key: 'asd',
              type: 'input',
              id: 'email',
              placeholder: 'Email address',
              validations: [
                {
                  type: 'email',
                  regex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                  errorMessage: 'Oops! That doesn’t look like an email address',
                },
                {
                  type:'isEmpty',
                  regex: /^\s*$/,
                  errorMessage: 'Oops! Please add your email'
                }
              ],
            },
          ],
          confirmButton: {
            description: 'Get notified',
            function: input => {
              alert(`Fired to ${input}`)
            },
          },
        },
      },
    }
  },
  provide() {
    return {
      header: this.header,
      news: this.news,
      benefits: this.benefits,
      pricingPlans: this.pricingPlans,
      notifications: this.notifications,
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
