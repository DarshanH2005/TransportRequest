# Transfer Workflow Component

A reusable React component for displaying a clickable Transfer Workflow button with background SVG, icon, text, and chevron navigation.

## 📦 Package Contents

```
TransferWorkflowComponent/
├── TransferWorkflow.jsx          # Main React component
├── TransferWorkflow.module.css   # Component styles (CSS Modules)
├── README.md                      # This file
└── assets/
    ├── transfer-workflow-bg.svg      # Background SVG
    ├── transfer-workflow-symbol.svg  # Workflow icon
    └── chevron-right.svg             # Right chevron icon
```

## 🚀 Installation

1. Copy the entire `TransferWorkflowComponent` folder into your React project
2. Make sure your project supports CSS Modules
3. Import and use the component

## 💻 Usage

### Basic Usage

```jsx
import TransferWorkflow from './TransferWorkflowComponent/TransferWorkflow';

function App() {
  const handleWorkflowClick = () => {
    console.log('Transfer Workflow clicked!');
    // Add your workflow transfer logic here
  };

  return (
    <div>
      <TransferWorkflow onClick={handleWorkflowClick} />
    </div>
  );
}
```

### With Custom Styling

```jsx
import TransferWorkflow from './TransferWorkflowComponent/TransferWorkflow';

function App() {
  return (
    <div>
      <TransferWorkflow 
        onClick={() => alert('Transferring workflow...')}
        className="my-custom-class"
      />
    </div>
  );
}
```

## 📋 Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `onClick` | `function` | No | `undefined` | Callback function executed when the component is clicked |
| `className` | `string` | No | `''` | Additional CSS class names to apply to the component |

## 🎨 Styling

The component uses CSS Modules for styling. The default styles include:

- **Font**: Samsung InterFace (falls back to system fonts)
- **Colors**: 
  - Text: `#101928`
  - Border: `#F3F3F3`
- **Spacing**: 
  - Top margin: `24px`
  - Bottom margin: `75px`
- **Interactive**: Hover and active states with opacity transitions
- **Responsive**: Adapts to mobile screens (< 768px)

### Customizing Styles

You can override styles by:

1. **Adding a custom class**:
   ```jsx
   <TransferWorkflow className="my-custom-workflow" />
   ```

2. **Creating custom CSS**:
   ```css
   .my-custom-workflow {
     margin-top: 50px;
     margin-bottom: 100px;
   }
   ```

3. **Modifying the CSS Module** directly in `TransferWorkflow.module.css`

## 🔧 Requirements

- React 16.8+ (uses hooks)
- CSS Modules support (create-react-app, Vite, Next.js all support this out of the box)
- SVG support in your bundler (webpack, Vite, etc.)

## 🌐 Browser Support

The component uses modern CSS features:
- Flexbox
- CSS transforms
- CSS transitions
- SVG rendering

Supported browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Accessibility

The component includes basic accessibility features:
- `role="button"` for semantic HTML
- `tabIndex={0}` for keyboard navigation
- Keyboard support (Enter and Space keys trigger onClick)
- Alt text for images

## 🐛 Known Issues / Limitations

- The component assumes the SVG assets are in the `./assets` folder relative to the component
- Font family defaults to Samsung InterFace - you may want to adjust this for your project
- The negative margins (`margin-left: -29px`, `margin-right: -68px`) are designed for a specific layout context and may need adjustment

## 🔄 Customization Tips

### Change the Text
Edit line 47 in `TransferWorkflow.jsx`:
```jsx
<span className={styles.transferWorkflowText}>Transfer Workflow</span>
// Change to:
<span className={styles.transferWorkflowText}>Your Custom Text</span>
```

### Change Colors
Edit `TransferWorkflow.module.css`:
```css
.transferWorkflowText {
  color: #101928; /* Change this to your preferred color */
}
```

### Remove Negative Margins
Edit `TransferWorkflow.module.css`:
```css
.transferWorkflowSection {
  margin-left: 0;    /* Changed from -29px */
  margin-right: 0;   /* Changed from -68px */
}
```

## 📄 License

Free to use in your projects!

## 🤝 Support

If you encounter any issues or have questions, feel free to reach out!

---

**Created with ❤️ for easy workflow transfers**
