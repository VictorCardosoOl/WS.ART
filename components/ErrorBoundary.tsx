import React, { Component, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: null
        };
    }

    static getDerivedStateFromError(error: Error): State {
        return {
            hasError: true,
            error
        };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
        // TODO: Enviar para serviço de logging (Sentry, LogRocket, etc.)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-stone-50 px-6">
                    <div className="max-w-md text-center">
                        <h1 className="text-6xl font-serif text-stone-900 mb-4">Oops!</h1>
                        <p className="text-lg text-stone-600 mb-8">
                            Algo deu errado. Por favor, recarregue a página.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-8 py-3 bg-[#754548] text-white font-sans text-sm uppercase tracking-widest hover:bg-[#8B4513] transition-colors"
                        >
                            Recarregar Página
                        </button>
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details className="mt-8 text-left">
                                <summary className="cursor-pointer text-sm text-stone-500 hover:text-stone-700">
                                    Detalhes do erro (dev only)
                                </summary>
                                <pre className="mt-4 p-4 bg-stone-100 text-xs overflow-auto rounded">
                                    {this.state.error.toString()}
                                </pre>
                            </details>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
