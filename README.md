# Gmail Attachment Organizer Landing Page

A responsive landing page for the Gmail Attachment Organizer Chrome extension.

## Adding Your Screenshots

The landing page has been set up to use local image files from the `images` directory. Follow these steps to add your actual screenshots:

1. Prepare your screenshots in the following sizes:
   - Hero image: 800×500px (or similar aspect ratio)
   - Step images: 300×200px (or similar aspect ratio)
   - Demo video thumbnail: 1200×675px (16:9 aspect ratio)

2. Name your image files according to their purpose:
   - `hero-screenshot.jpg` - Main hero image showing the extension interface
   - `install-screenshot.jpg` - Installation process screenshot
   - `authorize-screenshot.jpg` - Gmail authorization screenshot
   - `scanning-screenshot.jpg` - Screenshot showing scanning progress
   - `organized-screenshot.jpg` - Screenshot showing organized attachments
   - `demo-video-thumbnail.jpg` - Thumbnail for the demo video

3. Place all image files in the `images` directory

4. The HTML file already references these images, so they will appear automatically once added

## Image Optimization Tips

For better page performance:

1. Compress your images using a tool like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
2. Consider using WebP format instead of JPG/PNG for better compression
3. Make sure all images have proper alt text (already added in HTML)

## Replacing Placeholder Content

1. Review all text content and replace any placeholder text with your actual copy
2. Update the footer contact information and copyright year
3. Add actual links to your Chrome Web Store listing in the "Add to Chrome" buttons

## Video Demo Integration

To add a functional video demo:

1. Host your video on a platform like YouTube or Vimeo
2. Replace the demo section with an embedded video or update the play button's click handler to open the video

## Testing

Before deployment, test the landing page on multiple devices and browsers to ensure:

1. All images load correctly
2. The layout is responsive and adapts to different screen sizes
3. All links and buttons work properly 