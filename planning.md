# Sax Coach - Project Planning Document

## Project Overview
Sax Coach is a web application designed to help saxophone players practice and improve their skills. The app provides real-time feedback on playing accuracy, tuning assistance, and practice session management.

## Core Features

### 1. User Management
- User registration and authentication
  - Email verification
  - Password reset functionality
  - Session management with JWT tokens
- Practice history tracking
  - Store practice sessions
  - Track improvement over time
  - Generate practice statistics
- Session management
  - Active session tracking
  - Session timeout handling
  - Concurrent session control

### 2. Music Sheet Management
- PDF upload and processing
  - Support for PDF and image formats
  - OCR for music notation
  - File size limits and validation
- Music sheet display
  - Zoom and pan functionality
  - Page navigation
  - Annotations support
- Sheet music analysis
  - Note detection
  - Rhythm analysis
  - Key signature detection
  - Time signature detection
- Tempo control
  - BPM selection
  - Metronome integration
  - Tempo adjustment during playback
- Playback functionality
  - MIDI generation
  - Audio synthesis
  - Synchronized playback
- Sheet music library
  - Categorization
  - Search functionality
  - Favorites system

### 3. Tuner Component
- Real-time pitch detection
  - Web Audio API integration
  - FFT analysis
  - Note identification
- Visual tuning interface
  - Pitch needle display
  - Frequency spectrum
  - Note name display
- Frequency analysis (440Hz for Alto Sax)
  - A4 reference tone
  - Cent deviation calculation
  - Harmonic analysis

### 4. Practice Room
- Real-time audio recording
  - Web Audio API implementation
  - Buffer management
  - Stream processing
- Audio analysis
  - Pitch tracking
  - Rhythm analysis
  - Volume monitoring
- Performance comparison with sheet music
  - Note-by-note comparison
  - Timing accuracy
  - Pitch accuracy
- Real-time feedback
  - Visual indicators
  - Audio cues
  - Performance metrics
- Practice session settings
  - Tempo selection
  - Focus areas selection
    - Pitch accuracy
    - Rhythm accuracy
    - Articulation
    - Dynamics

### 5. Feedback System
- Real-time performance analysis
  - Accuracy scoring
  - Error detection
  - Pattern recognition
- Post-session feedback
  - Performance summary
  - Error analysis
  - Improvement suggestions
- Progress tracking
  - Historical data analysis
  - Improvement metrics
  - Practice patterns
- Performance summaries
  - Session statistics
  - Trend analysis
  - Achievement tracking

## ML/LLM Implementation

### 1. ML Models for Audio Analysis
- Pitch Detection Model
  - Training Data:
    - Saxophone recordings (various styles)
    - Clean and noisy samples
    - Different playing techniques
  - Features:
    - Frequency analysis
    - Harmonic content
    - Temporal patterns
  - Implementation:
    - TensorFlow/Keras
    - Real-time inference
    - Model optimization

- Rhythm Analysis Model
  - Training Data:
    - Various rhythm patterns
    - Different tempos
    - Common mistakes
  - Features:
    - Onset detection
    - Duration analysis
    - Pattern recognition
  - Implementation:
    - Time-series analysis
    - Pattern matching
    - Error detection

### 2. LLM Integration for Feedback
- Gemini API Integration
  - Implementation:
    - API wrapper
    - Rate limiting
    - Error handling
  - Use Cases:
    - Performance analysis
    - Practice recommendations
    - Progress summaries
  - Features:
    - Context-aware feedback
    - Personalized suggestions
    - Learning path generation

### 3. Training Pipeline
1. Data Collection
   - Source saxophone recordings
   - Annotate performance data
   - Create labeled datasets

2. Data Preprocessing
   - Audio normalization
   - Feature extraction
   - Data augmentation

3. Model Training
   - Split training/validation sets
   - Hyperparameter tuning
   - Model evaluation

4. Model Deployment
   - Model optimization
   - API integration
   - Performance monitoring

## Technical Implementation

### Backend Architecture (Django)
1. **User Management App**
   - User model
     - Custom user model
     - Profile extension
     - Session tracking
   - Authentication endpoints
     - JWT implementation
     - OAuth2 support
     - Session management
   - Profile management
     - User preferences
     - Practice settings
     - Achievement tracking

2. **Music Sheet App**
   - PDF processing
     - PyPDF2 integration
     - OCR implementation
     - Metadata extraction
   - Music analysis
     - music21 integration
     - Note detection
     - Rhythm analysis
   - Sheet storage
     - File system management
     - Cloud storage integration
     - Cache implementation
   - Playback generation
     - MIDI synthesis
     - Audio rendering
     - Synchronization

3. **Tuner App**
   - Audio processing
     - Web Audio API integration
     - Buffer management
     - Stream processing
   - Pitch detection
     - FFT analysis
     - Note identification
     - Frequency tracking
   - Frequency analysis
     - Harmonic analysis
     - Cent calculation
     - Accuracy scoring

4. **Practice Room App**
   - Audio recording
     - Stream management
     - Buffer handling
     - Format conversion
   - Real-time analysis
     - ML model integration
     - Performance metrics
     - Error detection
   - Performance comparison
     - Note matching
     - Timing analysis
     - Accuracy scoring
   - Session management
     - State tracking
     - Data persistence
     - Progress monitoring

5. **Feedback App**
   - Performance analysis
     - ML model integration
     - Pattern recognition
     - Error detection
   - Feedback generation
     - LLM integration
     - Context analysis
     - Suggestion generation
   - Progress tracking
     - Data aggregation
     - Trend analysis
     - Achievement tracking
   - Summary generation
     - Report creation
     - Visualization
     - Export functionality

### Frontend Architecture (Angular)
1. **Core Components**
   - Navigation
     - Routing implementation
     - Guard implementation
     - Redux state management with TypeScript
   - User interface
     - Material Design
     - Responsive layout
     - Theme support
   - Authentication
     - Login/Register forms
     - Redux auth state management
     - Error handling
   - Layout
     - Component structure
     - Redux store configuration
     - Error boundaries

2. **Music Sheet Component**
   - PDF viewer
     - PDF.js integration
     - Zoom controls
     - Page navigation
   - Sheet controls
     - Playback controls
     - Tempo adjustment
     - Annotation tools
   - Playback interface
     - Audio visualization
     - Redux state for playback status
     - Control panel
   - Library management
     - File browser
     - Search functionality
     - Organization tools

3. **Tuner Component**
   - Visual interface
     - Pitch display
     - Frequency spectrum
     - Control panel
   - Real-time pitch display
     - Needle visualization
     - Note display
     - Accuracy indicator
   - Tuning history
     - Redux state for tuning data
     - Progress visualization
     - Export functionality

4. **Practice Room Component**
   - Audio recording interface
     - Recording controls
     - Level meter
     - Status display
   - Real-time feedback display
     - Performance metrics
     - Error indicators
     - Progress tracking
   - Session controls
     - Start/Stop controls
     - Settings panel
     - Redux state for session data
   - Performance visualization
     - Waveform display
     - Note tracking
     - Accuracy indicators

5. **Feedback Component**
   - Performance analysis display
     - Metrics visualization
     - Error highlighting
     - Progress tracking
   - Progress tracking
     - Historical data
     - Trend analysis
     - Achievement display
   - Recommendations
     - Practice suggestions
     - Focus areas
     - Improvement tips
   - Session summaries
     - Performance report
     - Error analysis
     - Progress overview

### Redux Store Structure
1. **Auth State**
   - User data
   - Authentication status
   - Session information
   - Error states

2. **Music Sheet State**
   - Current sheet data
   - Playback status
   - Library data
   - Search results

3. **Practice State**
   - Session data
   - Recording status
   - Performance metrics
   - Real-time feedback

4. **Tuner State**
   - Current pitch data
   - Tuning history
   - Calibration settings
   - Error states

5. **UI State**
   - Theme preferences
   - Layout settings
   - Modal states
   - Loading states

### TypeScript Interfaces
1. **State Interfaces**
   - RootState
   - AuthState
   - MusicSheetState
   - PracticeState
   - TunerState
   - UIState

2. **Action Interfaces**
   - AuthActions
   - MusicSheetActions
   - PracticeActions
   - TunerActions
   - UIActions

3. **Reducer Interfaces**
   - AuthReducer
   - MusicSheetReducer
   - PracticeReducer
   - TunerReducer
   - UIReducer

4. **Selector Interfaces**
   - AuthSelectors
   - MusicSheetSelectors
   - PracticeSelectors
   - TunerSelectors
   - UISelectors

### Redux Middleware
1. **Auth Middleware**
   - Token management
   - Session handling
   - Error handling

2. **API Middleware**
   - Request handling
   - Response processing
   - Error handling

3. **Logging Middleware**
   - Action logging
   - Performance monitoring
   - Error tracking

4. **Analytics Middleware**
   - User action tracking
   - Performance metrics
   - Usage statistics

## Database Schema

### Users
- id (PK)
- username
- email
- password_hash
- created_at
- last_login
- profile_data
  - practice_preferences
  - instrument_settings
  - achievement_data

### Music Sheets
- id (PK)
- user_id (FK)
- title
- file_path
- upload_date
- metadata
  - composer
  - key_signature
  - time_signature
  - tempo
- analysis_data
  - note_data
  - rhythm_data
  - structure_data

### Practice Sessions
- id (PK)
- user_id (FK)
- music_sheet_id (FK)
- start_time
- end_time
- duration
- settings
  - tempo
  - focus_areas
  - difficulty_level
- performance_data
  - accuracy_scores
  - error_data
  - improvement_data

### Performance Data
- id (PK)
- session_id (FK)
- timestamp
- pitch_data
  - detected_notes
  - accuracy_scores
  - error_types
- rhythm_data
  - timing_accuracy
  - pattern_recognition
  - error_analysis
- accuracy_score
  - overall_score
  - component_scores
  - trend_data
- feedback_data
  - analysis_results
  - improvement_suggestions
  - progress_metrics

## Development Phases

### Phase 1: Foundation (2 weeks)
1. Project setup
   - Django backend setup
     - Project structure
     - Dependencies
     - Configuration
   - Angular frontend setup
     - Project structure
     - Dependencies
     - Configuration
   - Database configuration
     - PostgreSQL setup
     - Schema design
     - Migration setup
   - Docker setup
     - Container configuration
     - Network setup
     - Volume management

2. Basic user management
   - Registration system
     - Form validation
     - Email verification
     - Error handling
   - Authentication
     - JWT implementation
     - Session management
     - Security measures
   - Profile management
     - Basic profile
     - Settings
     - Preferences

### Phase 2: Core Features (3 weeks)
1. Music sheet management
   - PDF upload
     - File handling
     - Validation
     - Storage
   - Basic display
     - PDF rendering
     - Navigation
     - Zoom controls
   - Simple playback
     - MIDI generation
     - Audio synthesis
     - Basic controls

2. Basic tuner
   - Real-time pitch detection
     - Audio input
     - Frequency analysis
     - Note identification
   - Simple visualization
     - Pitch display
     - Accuracy indicator
     - Basic controls

### Phase 3: Practice Room (4 weeks)
1. Audio recording
   - Basic recording
     - Audio input
     - Stream handling
     - Format conversion
   - Simple analysis
     - Pitch detection
     - Basic metrics
     - Error detection

2. Real-time feedback
   - Basic pitch comparison
     - Note matching
     - Accuracy scoring
     - Error detection
   - Simple rhythm analysis
     - Timing detection
     - Pattern matching
     - Error identification

### Phase 4: Advanced Features (5 weeks)
1. Enhanced music analysis
   - Detailed sheet music parsing
     - Advanced OCR
     - Structure analysis
     - Metadata extraction
   - Advanced playback features
     - Dynamic tempo
     - Expression control
     - Synchronization

2. ML Model Integration
   - Model deployment
     - TensorFlow serving
     - API endpoints
     - Performance monitoring
   - Real-time analysis
     - Audio processing
     - Feature extraction
     - Inference pipeline

3. LLM Integration
   - Gemini API setup
     - Authentication
     - Rate limiting
     - Error handling
   - Feedback generation
     - Context analysis
     - Response generation
     - Quality control

4. Comprehensive feedback
   - Detailed performance analysis
     - ML model integration
     - Pattern recognition
     - Error analysis
   - Progress tracking
     - Data aggregation
     - Trend analysis
     - Visualization
   - Advanced recommendations
     - Personalized suggestions
     - Learning paths
     - Improvement strategies

### Phase 5: Polish and Optimization (2 weeks)
1. UI/UX improvements
   - Design refinement
   - Responsive optimization
   - Accessibility features

2. Performance optimization
   - Backend optimization
   - Frontend optimization
   - Database optimization

3. Testing and bug fixes
   - Unit testing
   - Integration testing
   - End-to-end testing

4. Documentation
   - API documentation
   - User guide
   - Developer guide

## API Endpoints

### User Management
- POST /api/auth/register
  - Request body: username, email, password
  - Response: JWT token, user data
- POST /api/auth/login
  - Request body: email, password
  - Response: JWT token, user data
- GET /api/auth/profile
  - Headers: Authorization
  - Response: user profile
- PUT /api/auth/profile
  - Headers: Authorization
  - Request body: profile data
  - Response: updated profile

### Music Sheets
- POST /api/sheets/upload
  - Headers: Authorization
  - Request body: file, metadata
  - Response: sheet data
- GET /api/sheets
  - Headers: Authorization
  - Response: sheet list
- GET /api/sheets/{id}
  - Headers: Authorization
  - Response: sheet data
- DELETE /api/sheets/{id}
  - Headers: Authorization
  - Response: success status

### Practice Sessions
- POST /api/sessions/start
  - Headers: Authorization
  - Request body: sheet_id, settings
  - Response: session data
- PUT /api/sessions/{id}/end
  - Headers: Authorization
  - Request body: performance data
  - Response: session summary
- GET /api/sessions
  - Headers: Authorization
  - Response: session list
- GET /api/sessions/{id}
  - Headers: Authorization
  - Response: session data

### Tuning
- POST /api/tuning/analyze
  - Headers: Authorization
  - Request body: audio data
  - Response: analysis results
- GET /api/tuning/history
  - Headers: Authorization
  - Response: tuning history

### Feedback
- POST /api/feedback/analyze
  - Headers: Authorization
  - Request body: performance data
  - Response: analysis results
- GET /api/feedback/summary
  - Headers: Authorization
  - Response: feedback summary

## Security Considerations
1. User authentication and authorization
   - JWT implementation
   - Role-based access
   - Session management
2. Secure file uploads
   - File validation
   - Virus scanning
   - Storage security
3. Audio data privacy
   - Data encryption
   - Access control
   - Retention policies
4. API endpoint protection
   - Rate limiting
   - Input validation
   - Error handling
5. Data encryption
   - TLS/SSL
   - Data at rest
   - Data in transit
6. Session management
   - Token rotation
   - Session timeout
   - Concurrent control

## Testing Strategy
1. Unit tests for backend components
   - Model tests
   - View tests
   - Utility tests
2. Integration tests for API endpoints
   - Endpoint tests
   - Authentication tests
   - Error handling
3. Frontend component testing
   - Component tests
   - Service tests
   - Integration tests
4. End-to-end testing
   - User flows
   - Critical paths
   - Error scenarios
5. Performance testing
   - Load testing
   - Stress testing
   - Benchmarking
6. Security testing
   - Vulnerability scanning
   - Penetration testing
   - Security audits

## Deployment Strategy
1. Development environment
   - Local setup
   - Docker compose
   - Development tools
2. Staging environment
   - Test deployment
   - Integration testing
   - Performance testing
3. Production environment
   - Cloud deployment
   - Load balancing
   - Monitoring
4. CI/CD pipeline
   - Automated testing
   - Automated deployment
   - Version control
5. Monitoring and logging
   - Performance monitoring
   - Error tracking
   - User analytics
6. Backup strategy
   - Data backup
   - Disaster recovery
   - Version control

## Future Enhancements
1. Multiple instrument support
   - Additional instruments
   - Instrument-specific features
   - Cross-instrument analysis
2. Advanced ML models for analysis
   - Deep learning models
   - Real-time processing
   - Advanced features
3. Social features
   - User sharing
   - Community features
   - Collaboration tools
4. Mobile application
   - Native apps
   - Offline support
   - Mobile features
5. Offline mode
   - Local storage
   - Sync functionality
   - Offline features
6. Advanced music theory features
   - Theory lessons
   - Exercises
   - Progress tracking

## Timeline Estimation
- Phase 1: 2 weeks
  - Week 1: Project setup
  - Week 2: User management
- Phase 2: 3 weeks
  - Week 1: Music sheet management
  - Week 2: Basic tuner
  - Week 3: Integration and testing
- Phase 3: 4 weeks
  - Week 1-2: Audio recording
  - Week 3-4: Real-time feedback
- Phase 4: 5 weeks
  - Week 1: Enhanced music analysis
  - Week 2: ML model integration
  - Week 3: LLM integration
  - Week 4-5: Comprehensive feedback
- Phase 5: 2 weeks
  - Week 1: Polish and optimization
  - Week 2: Documentation and final testing

Total estimated time: 16 weeks 